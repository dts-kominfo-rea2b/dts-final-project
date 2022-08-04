import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Page404 from "./containers/Page404";
import ProtectedRoute from "./components/ProtectedRoute";
import GameDetail from "./containers/GameDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="login"
          element={
            <ProtectedRoute loginOnly={false}>
              <Login></Login>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="register"
          element={
            <ProtectedRoute loginOnly={false}>
              <Register></Register>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="gamedetail/:id"
          element={
            <ProtectedRoute>
              <GameDetail></GameDetail>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
