import React from 'react';

import { Navigate } from 'react-router-dom';

const ProtectedRouteAuth = ({ children }) => {
  const token = localStorage.getItem('token') || null;

  if (token) {
    return <Navigate to='/dashboard' />;
  } else {
    return children;
  }
};

export default ProtectedRouteAuth;
