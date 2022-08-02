import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import AuthContext from '../context/auth/AuthContext';
import { login } from '../context/auth/AuthActions';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const { message, dispatch } = useContext(AuthContext);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(auth, email, password, dispatch, navigate);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE',
      });
    }, 5000);
  }, [dispatch]);

  return (
    <div className='w-96 flex flex-col justify-center mx-auto'>
      <div className='mb-6'>
        <h3 className='font-semibold text-2xl text-white-800'>Sign In </h3>
        <p className='text-white-500'>Please sign in to your account.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='space-y-3'>
          <div className='space-y-2'>
            <label className=' font-medium text-white-700 tracking-wide'>
              Email
            </label>
            <input
              className=' w-full text-base text-gray-700 px-4 py-2 border  border-white-300 rounded-md focus:outline-none focus:border-purple-400'
              type='email'
              placeholder='mail@gmail.com'
              onChange={onChange}
              name='email'
            />
          </div>
          <div className='space-y-2'>
            <label className='mb-5 font-medium text-white-700 tracking-wide'>
              Password
            </label>
            <input
              className=' w-full text-base text-gray-700 px-4 py-2 border  border-white-300 rounded-md focus:outline-none focus:border-purple-400'
              type='password'
              placeholder='Enter your password'
              onChange={onChange}
              name='password'
            />
            <label className='label mt-0'>
              <span id='error-message' className='label-text-alt text-error'>
                {message}
              </span>
            </label>
          </div>
        </div>
        <div className='mt-5'>
          <button
            type='submit'
            className='w-full flex justify-center btn btn-primary p-3 rounded-lg tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500'
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
