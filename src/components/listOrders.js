import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, IconButton, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import api from '../utils/api';
import { useAuth } from '../hooks/authContext';

const ListCommandes = () => {
  const [order, setOrder] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { pharmacy } = user;
  const token = localStorage.getItem('token');


  useEffect(() => {
    // Fetch users from the server
    const fetchOrder = async () => {
      try {
        const response = await api.get(`pharmacies/${pharmacy.id}/users`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUsers(response.data);
  
        } catch (error) {
          console.error('Erreur lors du chargement des produits:', error);
        }
      };

    fetchUsers();
  }, [users]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`pharmacies/${pharmacy.id}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error('Erreur lors de la suppression du produit:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/update-user/${id}`);
  };

  return (
    <Container>
      <Box sx={{ marginTop: 15}}>
        <Typography variant='h5' sx={{ fontWeight: '300' }} gutterBottom>Liste des Utilisateurs</Typography>
      </Box>
      <Box mt={1}>
        <List>
          {users.map((users) => (
            <ListItem key={users._id} divider>
              <Grid container alignItems="center">
                <Grid item xs={8}>
                  <ListItemText
                    primary={`${users.firstname} ${users.name}`}
                    secondary={`Email: ${users.email} | Rôle: ${users.roles}`}
                  />
                </Grid>
                <Grid item xs={4} container justifyContent="flex-end">
                  <IconButton color="primary" onClick={() => handleEdit(users._id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDelete(users._id)}>
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

export default ListCommandes;
