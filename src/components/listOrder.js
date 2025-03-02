import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Chip } from '@mui/material';
import api from '../utils/api';
import { useAuth } from '../hooks/authContext';

const statusColors = {
  pending: '#FFA500', // orange pour en attente
  confirmed: '#4CAF50', // vert pour confirmé
  shipped: '#2196F3', // bleu pour expédié
  delivered: '#008000', // vert foncé pour livré
  cancelled: '#FF0000', // rouge pour annulé
  returned: '#8B0000'  // rouge foncé pour retourné
};

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const { pharmacy } = user;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get(`/orders/pharmacy/${pharmacy.id}`);
        setOrders(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des commandes :', error);
      }
    };

    fetchOrders();
  }, [pharmacy.id]);

  return (
    <Container>
      <Box sx={{ marginTop: 15 }}>
        <Typography variant="h5" sx={{ fontWeight: '300' }} gutterBottom>
          Liste des Commandes
        </Typography>
        <List>
          {orders.map((order) => (
            <ListItem key={order.id}>
              <ListItemText
                primary={`Commande de ${user.name} - ${new Date(order.date).toLocaleDateString()}`}
                secondary={`Total Produits : ${order.productsInOrder.length}`}
              />
              <List>
                {order.productsInOrder.map((item, index) => (
                  <ListItemText 
                    key={index} 
                    primary={`${item.product} (Quantité : ${item.quantity})`} 
                  />
                ))}
              </List>
              <Chip
                label={order.status}
                sx={{ 
                  bgcolor: statusColors[order.status.toLowerCase()], 
                  color: '#fff' 
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default OrderList;
