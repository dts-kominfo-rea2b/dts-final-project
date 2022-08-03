import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <ToastContainer />
      <div className='w-screen h-auto min-h-[100vh] flex flex-col bg-primary'>
        <main
          className={`'mt-16 md:mt-16 px-3 md:px-8 md:py-6 py-4'} w-full h-auto`}
          onClick={() => {}}
        >
          <Routes>
            <Route path='/*' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
