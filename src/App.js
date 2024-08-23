import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import { AuthProvider } from './hooks/authContext';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
        <AppRoutes />
      </div>
    </Router>
  </AuthProvider>
  );
}

export default App;