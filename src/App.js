import * as React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import EasyRecipes from './containers/EasyRecipes';
import HealthyRecipes from './containers/HealthyRecipes';
import Login from './components/Login';
import Register from './components/Register';
import RecipeDetail from './components/RecipeDetail';
import Footer from './components/Footer';
import TesCarousel from './components/TesCarousel'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='easy-recipes' element={<EasyRecipes />} />
        <Route path='healthy-recipes' element={<HealthyRecipes />} />
        <Route path='login' element={
          <ProtectedRoute loginOnly={false}>
            <Login />
          </ProtectedRoute>
        } />
        <Route path='register' element={
          <ProtectedRoute loginOnly={false}>
            <Register />
          </ProtectedRoute>
        } />
        <Route path='recipes/:recipeId' element={<RecipeDetail />} />
        <Route path='tes-carousel' element={<TesCarousel />}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
