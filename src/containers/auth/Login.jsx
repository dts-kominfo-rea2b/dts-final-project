import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from '../../firebase.config';
import React, { useState } from 'react';
import { TbBrandGoogle } from 'react-icons/tb';
import { useStateValue } from 'context/StateProvider';
import { actionType } from 'context/reducer';
import { Link, useNavigate } from 'react-router-dom';
import LoadingIcon from 'assets/icons/loading';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const [{ user }, dispatch] = useStateValue();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const loginSocmed = async () => {
    if (!user) {
      await signInWithPopup(firebaseAuth, provider).then((res) => {
        const { user } = res;
        dispatch({
          type: actionType.SET_USER,
          user: user?.providerData[0],
        });
        localStorage.setItem('user', JSON.stringify(user?.providerData[0]));

        navigate('/', { replace: true });
      });
    }
    return;
  };

  const loginWithCredentials = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!user) {
      await signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
          setLoading(false);
          const { user } = userCredential;
          dispatch({
            type: actionType.SET_USER,
            user: user?.providerData[0],
          });
          localStorage.setItem('user', JSON.stringify(user?.providerData[0]));

          navigate('/', { replace: true });
        })
        .catch((error) => {
          setLoading(false);
          const errorMessage = error.message;
          toast.error(errorMessage, {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
              fontSize: '12px',
            },
          });
        });
    }
    return;
  };

  return (
    <section className='grid place-items-center'>
      <div className='container py-0 px-0 h-full min-h-[95vh]'>
        <div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
          <div className='xl:w-10/12'>
            <div className='block bg-white shadow-lg rounded-lg'>
              <div className='lg:flex lg:flex-wrap g-0'>
                <div className='lg:w-6/12 px-4 md:px-0'>
                  <div className='md:p-12 md:mx-6 pt-8'>
                    <div className='text-center'>
                      <h4 className='text-xl font-semibold mt-1 mb-12 pb-1'>
                        We are Foody Yummy
                      </h4>
                    </div>

                    <Toaster />
                    <form onSubmit={loginWithCredentials}>
                      <p className='mb-2'>Silahkan masuk ke akun anda</p>
                      <div className='text-center pt-1 pb-5 border-b mb-7'>
                        <button
                          className='relative w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'
                          onClick={(e) => {
                            e.preventDefault();
                            loginSocmed();
                          }}
                        >
                          <span className='flex justify-center items-center gap-2 relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                            <TbBrandGoogle size={18} /> Masuk Dengan Google
                          </span>
                        </button>
                      </div>

                      <div className='mb-4'>
                        <input
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          id='email'
                          placeholder='Email'
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          type='password'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          id='password'
                          placeholder='Password'
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className='text-center pt-1 pb-1'>
                        <button
                          className='inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                          data-mdb-ripple='true'
                          data-mdb-ripple-color='light'
                          style={{
                            background:
                              'linear-gradient(to right, #ee7724,#d8363a, #dd3675,#b44593)',
                          }}
                          disabled={loading}
                        >
                          {loading && <LoadingIcon />} Masuk
                        </button>
                      </div>
                      <div className='flex items-center justify-between pb-6'>
                        <p className='mb-0 mr-2'>Belum punya akun?</p>
                        <Link to='/register'>Daftar</Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className='lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none'
                  style={{
                    background:
                      'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                  }}
                >
                  <div className='text-white px-4 py-6 md:p-12 md:mx-6'>
                    <h4 className='text-xl font-semibold mb-6'>Food Yummy</h4>
                    <p className='text-sm'>
                      "Diet kamu adalah rekening bank. Pilihan makanan yang baik
                      adalah investasi yang baik."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
