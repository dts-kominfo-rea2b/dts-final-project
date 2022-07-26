// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './assets/mui-theme';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/Login';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';
// import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar />
            <Routes>
              {/* <Route path="/login" elemet={<NoMatch />} /> */}
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
              <Route path="*" element={<NoMatch />} />
            </Routes>
            <Footer />
          </header>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
