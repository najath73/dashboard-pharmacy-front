import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import api from '../utils/api';
import { Container, Typography, Box, Button, TextField} from '@mui/material';

const UpdateProduct = () => {

    const {pharmacy_Id,id} = useParams();
    const navigate = useNavigate();
    const [productInPharmacyData, setProductInPharmacyData] = useState ({
        price:'',
        quantity:'',
    });

    useEffect(() => {
        // Fetch products from the server
        const fetchProductInPharmacyData = async () => {
          try {
            const response = await api.get(`pharmacies/${pharmacy_Id}/products/${id}`);
            const { price, quantity } = response.data;
            setProductInPharmacyData({ price, quantity });
            }
            catch (error) {
            console.error('Erreur lors du chargement du produit:', error);
          }
        };
    
        fetchProductInPharmacyData();
      }, [pharmacy_Id, id]);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setProductInPharmacyData({ ...productInPharmacyData, [name]: value });
      };

      const handleUpdate = async () => {
        try {
          const token = localStorage.getItem('token');
          await api.patch(`pharmacies/${pharmacy_Id}/products/${id}`,
            productInPharmacyData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log('Produit mise à jour avec succès');
          navigate('/pharmacy/list-product'); // Rediriger vers la liste des produits après la mise à jour
        } catch (error) {
          console.error('Erreur lors de la mise à jour du produit :', error);
        }
      };

      return (
        <Container >
          <Box sx={{ marginTop: 15}}>
            <Typography variant='h5' sx={{ fontWeight: '300' }} gutterBottom> Modifier le Produit</Typography>
          </Box>
          <Box>
            <Box component="form" sx={{ mt: 3 }}>
              <TextField
                name="price"
                label="Prix"
                value={productInPharmacyData.price}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="quantity"
                label="Quantité du produit"
                value={productInPharmacyData.quantity}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
        
        <Button
            variant="contained"
            onClick={handleUpdate}
            sx={{
                mt: 3,
                bgcolor: '#007B7F', // Bleu turquoise foncé
                '&:hover': {
                bgcolor: '#006668', // Légèrement plus foncé au survol
                },
        }}
        >
            Mettre à jour
        </Button>
            </Box>
          </Box>
        </Container>
      );
    };

export default UpdateProduct;