import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta pública para el login */}
        <Route path="/" element={<Login />} />
        
        {/* Rutas protegidas usando PrivateRoute */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<App />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
