import React from 'react';
import { Box,  } from '@mui/material';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import AddProductForm from '../components/addProductForm'

const UpdateProductPage = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '' }}>
      <Navbar />
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <AddProductForm />
      </Box>
    </Box>
  );
};

export default UpdateProductPage;
