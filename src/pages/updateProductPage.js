import React from 'react';
import { Box,  } from '@mui/material';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import UpdateProduct from '../components/updateProductPharmacy'

const UpdateProductPage = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '' }}>
      <Navbar />
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <UpdateProduct />
      </Box>
    </Box>
  );
};

export default UpdateProductPage;
