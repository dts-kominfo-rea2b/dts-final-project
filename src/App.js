import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./containers/Register";
import Subscribed from "./containers/Subscribed";
import Login from "./containers/Login";
import About from "./containers/About";
import theme from "./themes/theme";
import NotFound from "./containers/NotFound";
import React from "react";
import Main from "./components/Main";
import BooksList from "./containers/BooksList";
import Seller from "./containers/Seller";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="popular"
            element={
              <>
                <Navbar />
                <BooksList />
                <Footer />
              </>
            }
          />
          <Route
            path="bestseller"
            element={
              <>
                <Navbar />
                <Seller />
                <Footer />
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <NotFound />
                <Footer />
              </>
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoute loginOnly={false}>
                <Login />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoute loginOnly={false}>
                <Register />
                <Footer />
              </ProtectedRoute>
            }
          />
                    <Route
            path="/subscribed/:plan"
            element={
              <ProtectedRoute>
                <Navbar />
                <Subscribed />
                <Footer />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;