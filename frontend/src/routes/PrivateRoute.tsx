import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../utils.ts/auth';


const PrivateRoute = () => {
  // Utiliza la función isAuthenticated para verificar si el usuario está autenticado
  const authenticated = isAuthenticated();

  return authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
