import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { TextField, Button, Box, Typography, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useAuth } from '../hooks/authContext';

const UpdateUser = () => {
  const { id } = useParams(); // Récupérer l'ID du produit à modifier
  const navigate = useNavigate();
  const { user } = useAuth();
  const { pharmacy } = user;
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    firstname:'',
    email: '',
    password: '',
    roles: '',
    
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get(`/users/${id}/`);
        const { username, name, firstname, email,roles } = response.data;
        setUserData({ username, name, firstname, email,roles });
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
      }
    };

    fetchUserData();
  }, [id, pharmacy.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;  
    setUserData({ ...userData, [name]: value });
  };

  

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token'); 
      const response = await api.patch(`/users/${id}/`, userData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Utilisateur mise à jour avec succès');
      navigate('/list-user'); 
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
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
            name="username"
            label="Nom d'utilisateur"
            value={userData.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="name"
            label="Nom "
            value={userData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="firstname"
            label="Prenom "
            value={userData.firstname}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="email"
            label="Email "
            value={userData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Rôle</InputLabel>
            <Select
              name="roles" 
              value={userData.roles}
              onChange={handleChange} 
              label="Rôle"
            >
              <MenuItem value="pharmacy_manager">Pharmacy Manager</MenuItem>
              <MenuItem value="pharmacy_worker">Pharmacy Worker</MenuItem>
            </Select>
          </FormControl>
    
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

export default UpdateUser;
