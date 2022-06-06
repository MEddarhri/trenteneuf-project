import { Routes, Route } from 'react-router-dom';
import Register from 'pages/register';
import Login from 'pages/login';
import VerifyEmail from 'pages/verifyemail';
import SetPassword from 'pages/setpassword';
import Dashboard from 'pages/dashboard';
import React from 'react';
import ProtectedRouteAuth from './ProtectedRouteAuth';
import ProtectedRouteDash from './ProtectedRouteDash';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/dashboard'
        element={
          // <ProtectedRouteDash>
          <Dashboard />
          // </ProtectedRouteDash>
        }
      />
      <Route
        path='/login'
        element={
          <ProtectedRouteAuth>
            <Login />
          </ProtectedRouteAuth>
        }
      />
      <Route
        path='/register'
        element={
          <ProtectedRouteAuth>
            <Register />
          </ProtectedRouteAuth>
        }
      />
      <Route
        path='/verification'
        element={
          <ProtectedRouteAuth>
            <VerifyEmail />
          </ProtectedRouteAuth>
        }
      />
      <Route
        path='/setpassword'
        element={
          <ProtectedRouteAuth>
            <SetPassword />
          </ProtectedRouteAuth>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
