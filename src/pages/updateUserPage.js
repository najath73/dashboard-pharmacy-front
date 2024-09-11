import React from 'react';
import { Box,  } from '@mui/material';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import UpdateUser from '../components/updateUser'

const UpdateUserPage = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '' }}>
      <Navbar />
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <UpdateUser />
      </Box>
    </Box>
  );
};

export default UpdateUserPage;
