
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Container, FormControl, InputLabel, MenuItem, Select, } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../utils/api';
import { useAuth } from '../hooks/authContext';


const AddProductForm = () => {
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [productData, setProductData]= useState([]);
  const [name, setName] = useState('');
  const { pharmacy_id } = useParams();


  useEffect(() => {
    // Fetch products from the server
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://back-pharmacie.onrender.com/products'); // Remplace par ton URL API
        setProductData(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
      }
    };

    fetchProducts();
  }, [product_id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const token = localStorage.getItem('token');  
        await api.post(`pharmacies/${pharmacy_id}/products`, {
            name,
            price,
            quantity,
        });
        
      navigate('/products');
    } catch (err) {
      setError("Erreur lors de l'ajout du produit. Veuillez vérifier vos informations.");
    }
  };

    return (
        
        <Container>
        <Box sx={{ marginTop: 15}}>
          <Typography variant='h5' sx={{ fontWeight: '300' }} gutterBottom>Ajouter un produit</Typography>
        </Box>
        <Box >
        <FormControl fullWidth margin="normal">
            <InputLabel>Nom du produit</InputLabel>
            <Select
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Nom"
            >
                
              <MenuItem key={product_id} value={product.name}> </MenuItem>
            </Select>
          </FormControl>
            
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                label="Quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                multiline
                rows={4}
            />
            {error && <Typography color="error" variant="body2">{error}</Typography>}
            <Button type="submit" fullWidth variant="contained" 
              sx={{ mt: 3,
              bgcolor: '#007B7F', // Bleu turquoise foncé
              '&:hover': {
              bgcolor: '#006668', // Légèrement plus foncé au survol
              },
            }}
            
            
            >
              
              Ajouter le Produit</Button>
            </Box>
        </Box>
        </Container>
    );
};

export default  AddProductForm;
