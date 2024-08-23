import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#1F2A30',zIndex: (theme) => theme.zIndex.drawer + 1, }}>
      <Toolbar>
        
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
