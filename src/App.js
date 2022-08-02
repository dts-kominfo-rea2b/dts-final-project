import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import Home from './pages/LandingPage';
import LandingPage from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import { AuthProvider } from './context/auth/AuthContext';

function App() {
  return (
    <AuthProvider>
      <GithubProvider>
        <AlertProvider>
          <Router>
            <div className='flex flex-col justify-between h-screen'>
              <Navbar />

              <main className='container mx-auto px-3 pb-12'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/notfound' element={<NotFound />} />
                  <Route path='*' element={<NotFound />} />
                  <Route element={<ProtectedRoute />}>
                    <Route
                      path='/search'
                      element={
                        <>
                          <Alert />
                          <Search />
                        </>
                      }
                    />
                    <Route path='/home' element={<LandingPage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/user/:login' element={<User />} />
                  </Route>
                  <Route element={<ProtectedRoute isLogin={false} />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                  </Route>
                </Routes>
              </main>

              <Footer />
            </div>
          </Router>
        </AlertProvider>
      </GithubProvider>
    </AuthProvider>
  );
}

export default App;
