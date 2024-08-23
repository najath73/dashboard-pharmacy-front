import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useAuth } from '../hooks/authContext';

const SidebarUserPanel = () => {


  const { user } = useAuth(); // Utiliser le contexte d'authentification

  // Vérifier si l'utilisateur est connecté
  if (!user) {
    return null; // Ou afficher un message indiquant que l'utilisateur n'est pas connecté
  }

  const { username, avatar, roles } = user; // Extraire les informations de l'utilisateur
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
        src={avatar || "https://avatar.iran.liara.run/public"} // Remplace par l'image de l'utilisateur
      />
      <Typography variant="h6" sx={{ color: '#fff' }}>
        {username}
      </Typography>
      <Typography variant="body2" sx={{ color: '#B0BEC5' }}>
        Rôle: {roles}
      </Typography>
    </Box>
  );
};

export default SidebarUserPanel;
