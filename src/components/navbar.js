import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useAuth } from '../hooks/authContext';


const Navbar = () => {

  const { user } = useAuth(); // Utiliser le contexte d'authentification

  const {pharmacy} = user
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#1F2A30',zIndex: (theme) => theme.zIndex.drawer + 1, }}>
      <Toolbar>
        
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {pharmacy.name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
