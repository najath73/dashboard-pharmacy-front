import React from 'react';
import { Box,  } from '@mui/material';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import SidebarUserPanel from '../components/sidebarUserPanel';
import ContentWrapper from '../components/dashboardContent';
import Sidemenu from '../components/sidemenu';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#2E3A40' }}>
      <Navbar />
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <ContentWrapper />
      </Box>
    </Box>
  );
};

export default MainLayout;
