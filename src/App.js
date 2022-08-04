import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Beranda from './pages/Beranda';
import CreateBlog from './pages/CreateBlog';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { StateProvider } from './context/StateContext';
import ProtectedRoute from './utils/ProtectedRoute';
import DetailPost from './pages/DetailPost';
import ContactPage from './pages/ContactPage';
import About from './pages/About';
const App = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <Routes>
          <Route exact path='/' element={<Beranda />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<ContactPage />} />
          <Route exact path='/detail/:id' element={<DetailPost />} />
          <Route exact path='/login' element={<ProtectedRoute loginOnly={false}><Login /></ProtectedRoute>} />
          <Route exact path='/register' element={<ProtectedRoute loginOnly={false}><Register /></ProtectedRoute>} />
          <Route exact path='/dashboard/create' element={<ProtectedRoute loginOnly={true}><CreateBlog /></ProtectedRoute>} />
          <Route exact path='/dashboard' element={<ProtectedRoute loginOnly={true}><Dashboard /></ProtectedRoute>} />
        </Routes>
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
