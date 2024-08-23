import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, IconButton, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [productInPharmacy, setProductInPharmacy] = useState([]);
  const navigate = useNavigate();
  const { pharmacyId } = useParams(); // Récupère l'ID de la pharmacie depuis les paramètres de l'URL
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch products from the server
    const fetchProductInPharmacy = async () => {
      try {
        const response = await axios.get(`https://back-pharmacie.onrender.com/pharmacies/${pharmacyId}/products`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProductInPharmacy(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
      }
    };

    fetchProductInPharmacy();
  }, [pharmacyId, token]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://back-pharmacie.onrender.com/pharmacies/${pharmacyId}/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Recharger la liste des produits après suppression
      setProductInPharmacy(productInPharmacy.filter(productInPharmacy => productInPharmacy._id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression du produit:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/update-product/${id}`);
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '80px' }}> 
          Liste des Produits
        </Typography>
        <List>
          {productInPharmacy.map((productInPharmacy) => (
            <ListItem key={productInPharmacy._id} divider>
              <Grid container alignItems="center">
                <Grid item xs={8}>
                  <ListItemText
                    primary={productInPharmacy.name} 
                    secondary={`Prix: ${productInPharmacy.price} | Quantité: ${productInPharmacy.quantity}`} // Affichage du prix et de la quantité
                  />
                </Grid>
                <Grid item xs={4} container justifyContent="flex-end">
                  <IconButton color="primary" onClick={() => handleEdit(productInPharmacy._id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDelete(productInPharmacy._id)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default ProductList;
