import React from 'react';

import { Navigate } from 'react-router-dom';

const ProtectedRouteDash = ({ children }) => {
  const token = localStorage.getItem('token') || null;

  if (token) {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
};

export default ProtectedRouteDash;
