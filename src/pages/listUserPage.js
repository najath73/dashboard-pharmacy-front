import React from 'react';
import { Box,  } from '@mui/material';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import UserList from '../components/listUser'

const ListUserPage = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '' }}>
      <Navbar />
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <UserList />
      </Box>
    </Box>
  );
};

export default ListUserPage;
