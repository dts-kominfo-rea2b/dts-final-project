/* eslint-disable no-empty-pattern */
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';
import MainContainer from 'containers/MainContainer';
import CreateContainer from 'containers/CreateContainer';
import Login from 'containers/auth/Login';
import Register from 'containers/auth/Register';
import NotFound from 'containers/NotFound';
import EditProfile from 'containers/auth/EditProfile';
import { getAuth } from 'firebase/auth';
import { app } from 'firebase.config';
import ProtectedComponent from 'components/ProtectedComponent';
import FoodyLoader from 'components/FoodyLoader';
import { motion } from 'framer-motion';

const App = () => {
  const [{ loadingData }, dispatch] = useStateValue();
  const firebaseAuth = getAuth(app);
  const user = firebaseAuth?.currentUser;

  const location = useLocation();
  const isPathLogin = location.pathname === '/login';
  const isPathRegister = location.pathname === '/register';
  const isPathEditProfile = location.pathname === '/edit-profile';

  const isAuthPage = isPathLogin || isPathRegister;

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
      dispatch({
        type: actionType.SET_LOADING_DATA,
        loadingData: false,
      });
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      dispatch({
        type: actionType.SET_USER,
        user: user.providerData[0],
      });

      localStorage.setItem('user', JSON.stringify(user.providerData[0]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <AnimatePresence exitBeforeEnter>
      {loadingData ? (
        <FoodyLoader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`w-screen h-auto flex flex-col ${
            isAuthPage || isPathEditProfile ? 'bg-[#f8f8ff]' : 'bg-primary'
          }`}
        >
          {isAuthPage ? null : <Header />}

          <main
            className={`${
              isAuthPage ? 'mt-0 md:mt-0' : 'mt-14 md:mt-20'
            } px-4 md:px-16 py-4 w-full max-w-[1400px] my-0 mx-auto`}
          >
            <Routes>
              <Route path='/' element={<MainContainer />} />
              <Route
                path='/createItem'
                element={
                  <ProtectedComponent>
                    <CreateContainer />
                  </ProtectedComponent>
                }
              />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/edit-profile' element={<EditProfile />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
