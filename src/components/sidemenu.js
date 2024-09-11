import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom'; // Import du hook useNavigate
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const SideMenu = () => {
  const navigate = useNavigate(); // Initialisation du hook

  // Fonction pour gérer la navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  const [openProducts, setOpenProducts] = useState(false);
  const [openUsers, setOpenUsers] = useState(false); // Ajout d'état pour les utilisateurs

  const handleProductsClick = () => {
    setOpenProducts(!openProducts);
  };

  const handleUsersClick = () => {
    setOpenUsers(!openUsers);
  };

  return (
    <List>
      {/* Produits */}
      <List>
        <ListItem button onClick={handleProductsClick}>
          <ListItemIcon>
            <InventoryIcon sx={{ color: '#4CAF50' }} />
          </ListItemIcon>
          <ListItemText primary="Produits" sx={{ color: '#fff' }} />
          {openProducts ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openProducts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/pharmacy/list-product')}>
              <ListItemText primary="Liste des produits" sx={{ color: '#fff' }} />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/add-product')}>
              <ListItemText primary="Ajout d'un produit" sx={{ color: '#fff' }} />
            </ListItem>
          </List>
        </Collapse>
      </List>

      {/* Utilisateurs */}
      <List>
        <ListItem button onClick={handleUsersClick}>
          <ListItemIcon>
            <PeopleIcon sx={{ color: '#4CAF50' }} />
          </ListItemIcon>
          <ListItemText primary="Utilisateurs" sx={{ color: '#fff' }} />
          {openUsers ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openUsers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/list-user')}>
              <ListItemText primary="Liste des utilisateurs" sx={{ color: '#fff' }} />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation('/add-user')}>
              <ListItemText primary="Ajouter un utilisateur" sx={{ color: '#fff' }} />
            </ListItem>
          </List>
        </Collapse>
      </List>

      {/* Commandes */}
      <ListItem button onClick={() => handleNavigation('/list-order')}>
        <ListItemIcon>
          <PeopleIcon sx={{ color: '#4CAF50' }} />
        </ListItemIcon>
        <ListItemText primary="Commandes" sx={{ color: '#fff' }} />
      </ListItem>
    </List>
  );
};

export default SideMenu;
