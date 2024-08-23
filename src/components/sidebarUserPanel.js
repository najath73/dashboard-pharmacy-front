import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const SidebarUserPanel = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'drawerWidth',
        padding: '20px',
        p: 2,
        backgroundColor: '#263238', // Couleur légèrement différente pour le panel utilisateur
      }}
    >
      <Avatar
        sx={{
          width: 80,
          height: 80,
          mb: 2,
        }}
        alt="Nom de l'utilisateur"
        src="/path/to/avatar.jpg" // Remplace par l'image de l'utilisateur
      />
      <Typography variant="h6" sx={{ color: '#fff' }}>
        Nom de l'utilisateur
      </Typography>
      <Typography variant="body2" sx={{ color: '#B0BEC5' }}>
        Rôle: Gestionnaire
      </Typography>
    </Box>
  );
};

export default SidebarUserPanel;
