import React, { useState } from 'react';
import { useAuth } from '../hooks/authContext';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Grid, Box, Alert } from '@mui/material';
import { AuthorizationError } from '../utils/errors';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // État pour les erreurs
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(username, password); // Appel à la fonction login du contexte
      navigate('/'); // Redirection après login
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      // Gérer les erreurs en fonction de leur type
      if (error instanceof AuthorizationError) {
        setError(error.message);
      } else {
        setError(error.message || "Nom d'utilisateur ou mot de passe incorrect.");
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Connexion
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Mot de passe"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Connexion
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
