import { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import { FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logout } from '../../context/auth/AuthActions';
import { auth } from '../../config/firebase';

function Navbar({ title }) {
  const { isLoggedIn, userData, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout(auth, navigate, dispatch);
  };

  useEffect(() => {
    getCurrentCredentials();
    // eslint-disable-next-line
  }, []);

  const getCurrentCredentials = () => {
    const localData = JSON.parse(localStorage.getItem('firebase-auth'));

    if (localData) {
      dispatch({
        type: 'SET_USER_CREDENTIALS',
        payload: localData,
      });
    }
  };

  return (
    <nav className='navbar mb-6 text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end items-center'>
            {isLoggedIn && userData ? (
              <>
                <Link to='/home' className='btn btn-ghost btn-sm rounded-btn'>
                  Home
                </Link>
                <Link to='/search' className='btn btn-ghost btn-sm rounded-btn'>
                  Search
                </Link>
                <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                  About
                </Link>
                <div className='dropdown dropdown-end ml-4'>
                  <label
                    tabIndex='0'
                    className='btn btn-ghost btn-circle avatar'
                  >
                    <div className='w-10 rounded-full'>
                      <img
                        src='https://placeimg.com/80/80/people'
                        alt='profile_pict'
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex='0'
                    className='menu menu-compact dropdown-content mt-2 p-1 bg-gray-600 shadow-lg rounded-box w-46'
                  >
                    <li>
                      <Link to='#' className='justify-between'>
                        Profile
                        <span className='badge'>New</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='#'
                        className='justify-between'
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to='/register'
                  className='btn btn-ghost btn-sm rounded-btn'
                >
                  Register
                </Link>
                <Link to='/login' className='btn btn-ghost btn-sm rounded-btn'>
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
