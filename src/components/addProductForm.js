import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../utils/api';
import { useAuth } from '../hooks/authContext';

const AddProductForm = () => {
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [name, setName] = useState(''); // Initialisation avec une chaîne vide pour éviter les problèmes d'état non contrôlé
  const { user } = useAuth();

  useEffect(() => {
    // Fetch products from the server
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products'); // Remplace par ton URL API
        setProductData(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { pharmacy } = user;
      console.log(name);
      await api.post(`pharmacies/${pharmacy.id}/products/${name}`, {
        name,
        price,
        quantity,
      });
    
      navigate('/pharmacy/list-product');
    } catch (err) {
      setError("Erreur lors de l'ajout du produit. Veuillez vérifier vos informations.");
    }
  };

  return (
    <Container>
      <Box sx={{ marginTop: 15 }}>
        <Typography variant='h5' sx={{ fontWeight: '300' }} gutterBottom>
          Ajouter un produit
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Nom du produit</InputLabel>
          <Select
            value={name || ''}  // S'assurer que `name` n'est jamais `undefined`
            onChange={(e) => setName(e.target.value)}
            label="Nom"
          >
            {/* Option par défaut */}
            <MenuItem key={0} value="">
              <em>Sélectionnez un produit</em>
            </MenuItem>

            {/* Affichage des produits avec clé unique */}
            {productData.map((product, index) => (
              <MenuItem key={index} value={product._id}>
                {product.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          required
          fullWidth
          id="price"
          label="Prix du produit"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="quantity"
          label="Quantité"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
        />
        {error && <Typography color="error" variant="body2">{error}</Typography>}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            bgcolor: '#007B7F', // Bleu turquoise foncé
            '&:hover': {
              bgcolor: '#006668', // Légèrement plus foncé au survol
            },
          }}
        >
          Ajouter le Produit
        </Button>
      </Box>
    </Container>
  );
};

export default AddProductForm;
