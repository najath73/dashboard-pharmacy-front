import React from 'react';
import { Box, Container, Typography, Paper, IconButton } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const ContentWrapper = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Fond gris clair neutre
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={6}
          sx={{
            padding: '40px',
            borderRadius: '15px',
            textAlign: 'center',
            backgroundColor: '#fff', // Fond blanc pour la carte
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)', // Ombre douce
          }}
        >
          <IconButton
            size="large"
            sx={{
              fontSize: '70px',
              color: '#35b2a3',
              '&:hover': {
                color: '#2f9a8e',
                transform: 'scale(1.1)',
              },
            }}
          >
            <AdminPanelSettingsIcon fontSize="inherit" />
          </IconButton>

          <Typography
            variant="h2"
            gutterBottom
            sx={{
              marginTop: '30px',
              color: '#333',
              fontWeight: 'bold',
              fontSize: '2.5rem',
              textShadow: '1px 1px 5px rgba(0,0,0,0.1)',
            }}
          >
            Bienvenue sur le Dashboard pharmacie
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#555',
              fontSize: '1.2rem',
              marginTop: '20px',
              maxWidth: '800px',
              margin: 'auto',
              lineHeight: '1.8',
            }}
          >
            Gérez facilement les utilisateurs, les produits et les commandes grâce à cette interface moderne, intuitive et
            conçue pour vous offrir la meilleure expérience. Accédez rapidement aux informations importantes et prenez le contrôle total.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContentWrapper;
