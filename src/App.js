// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import theme from './assets/mui-theme';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/Login';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import MyPokemon from './pages/MyPokemon';
import PokemonDetail from './pages/PokemonDetail';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar />
            <Box sx={{ marginTop: 10, marginBottom: 10, width: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={
                  <ProtectedRoute loginOnly={false}>
                    <Login />
                  </ProtectedRoute>
                } />
                <Route path="/register" element={
                  <ProtectedRoute loginOnly={false}>
                    <Register />
                  </ProtectedRoute>
                } />
                <Route path='/pokemon' >
                  <Route path=':pokemon' element={
                    <ProtectedRoute>
                      <PokemonDetail />
                    </ProtectedRoute>
                  } />
                </Route>
                <Route path="/my-pokemon" element={
                  <ProtectedRoute>
                    <MyPokemon />
                  </ProtectedRoute>
                } />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </Box>
            <Footer />
          </header>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
