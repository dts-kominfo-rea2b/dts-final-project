import React from 'react';
import Footers from './Component/Footers';
import Hero from './Component/Hero';
import Main from './Component/Main';
import Navbar from './Component/Navbar';
// import TopBar from './Component/topBar';

function App() {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />
      <Hero />
      <Main />
      <Footers />
    </>
  );
}

export default App;
