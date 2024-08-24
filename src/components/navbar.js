import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useAuth } from '../hooks/authContext'; // Assurez-vous que vous avez cette fonction dans votre contexte

const Navbar = () => {
  const { user, logout } = useAuth(); // Utiliser le contexte d'authentification

  const { pharmacy } = user;

  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#1F2A30' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {pharmacy?.name || 'Nom de la pharmacie'}
        </Typography>
        
        <Button
          color="inherit"
          onClick={logout} // Assurez-vous que la fonction logout est définie dans votre contexte
          sx={{ ml: 2 }} // Ajout d'un espacement à gauche pour le bouton
        >
          Déconnexion
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
