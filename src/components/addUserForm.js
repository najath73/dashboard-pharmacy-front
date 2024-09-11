import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../utils/api';
import { useAuth } from '../hooks/authContext';

const AddUserForm = () => {

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();

 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { pharmacy } = user;
      console.log(name);
      await api.post(`pharmacies/${pharmacy.id}/users`, {
        username,
        name,
        firstname,
        email,
        password,
        roles,
        pharmacy,
      });
    
      navigate('/list-user');
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit. Veuillez vérifier vos informations.", error);
    }
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '80px' }}>
          Ajouter un utilisateur 
        </Typography>
        <Box mt={4}>
          <TextField
            fullWidth
            label="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Prénom"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Rôle</InputLabel>
            <Select
              value={roles}
              onChange={(e) => setRoles(e.target.value)}
              label="Rôle"
            >
              <MenuItem value="pharmacy_manager">Pharmacy Manager</MenuItem>
              <MenuItem value="pharmacy_worker">Pharmacy Worker</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#35b2a3",
              color: "#fff",
              '&:hover': {
                backgroundColor: "#2f9a8e",
              },
              mt: 3,
            }}
            onClick={handleSubmit}
          >
            Ajouter l'utilisateur
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddUserForm;
