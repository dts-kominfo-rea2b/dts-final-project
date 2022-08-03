import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Movies from './containers/Movies';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom'
import Pricing from './containers/Pricing';
import Subscribed from './containers/Subscribed';
import Register from './containers/Register';
// import Login from './containers/Login';
// import SignInSide from './containers/SignInSide';
import NotFound from './containers/NotFound';
import About from './containers/About';
import Private from './components/Private';
import Foodie from './containers/Foodie';
import SignInSide from './containers/SingInSide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Private>
            <App />
          </Private>
          }>
          <Route path="/" element={<Foodie />}></Route>
          <Route path="about" element={<About />}>
            <Route path="description" element={<Box sx={{mt:10}}>Provides movies in your hand</Box>}></Route>
            <Route path="services" element={<Box sx={{mt:10}}>Streaming moviesm Idonesian film and film review.</Box>}></Route>
          </Route>
          <Route path="indonesian" element={<Box sx={{ mt: 10 }}>Halaman indonesian</Box>}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="subscribed/:plan" element={<Subscribed />}></Route>
        </Route>
        <Route path="login" element={<SignInSide />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
