import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Component/Login';
// import Register from './Component/Register';
// import Footers from './Component/Footers';
// // import Hero from './Component/Hero';
// // import Main from './Component/Main';
// import Navbar from './Component/Navbar';
// import TopBar from './Component/topBar';
// import Details from './Component/Details';

function App() {
  return (
    <Router>
      {/* <TopBar />
      <Navbar />
      <Details />
      <Footers /> */}
      <Login />
      {/* <Register /> */}
    </Router>
  );
}

export default App;
