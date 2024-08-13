// ./components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('token');

  return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
