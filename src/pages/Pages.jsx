import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from '../components/Login';
import Register from '../components/Register';
import { AuthContextProvider } from '../context/AuthContext';
import Account from '../components/Account';
import ProtectedRoute from '../components/ProtectedRoute';
import CatergoryRecipe from './CatergoryRecipe';
import NotFound from './NotFound';
import About from './About';

function Pages() {
  const location = useLocation();
  return (
    <AuthContextProvider>
      <AnimatePresence exitBeforeEnter>
        <Routes Location={location} key={location.path}>
            <Route 
              path='*' 
              element={
              <>
              <NotFound /> 
              </>
              } 
            />
            <Route 
              path='/' 
              element={
              <>
              <Home /> 
              </>
              } 
            />
            <Route 
              path='/login' 
              element={
                <Login /> 
              } 
            />
            <Route 
              path='/register' 
              element={
              <Register /> 
              } 
            />
            <Route 
              path='/cuisine/:type' 
              element={
              <>
              <Cuisine /> 
              </>
              } 
            />
            <Route 
              path='/searched/:search' 
              element={
              <>
              <Searched /> 
              </>
              } 
            />
            <Route 
              path='/categoryrecipe' 
              element={
              <>
              <CatergoryRecipe /> 
              </>
              } 
            />
            <Route 
              path='/about' 
              element={
              <>
              <About /> 
              </>
              } 
            />
            <Route 
              path='/recipe/:name' 
              element={
              <ProtectedRoute>
              <Recipe /> 
              </ProtectedRoute>
              } 
            />
            <Route 
              path='/account' 
              element={
              <ProtectedRoute>
              <Account /> 
              </ProtectedRoute>
              } 
            />
        </Routes>
      </AnimatePresence>
    </AuthContextProvider>
  )
}

export default Pages