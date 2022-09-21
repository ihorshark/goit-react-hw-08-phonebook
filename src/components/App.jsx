import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AppBar } from './AppBar';
import Home from 'pages/homePage';
import Login from 'pages/login';
import Register from 'pages/register';
import Contacts from 'pages/contactsPage';
import { PrivateRoute } from './privateRoute';
import { PublicRoute } from './publicRoute';
import { authOperations } from 'redux/auth';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
