import { actionType } from 'context/reducer';
import { useStateValue } from 'context/StateProvider';
import { app, firestore } from 'firebase.config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import LoadingIcon from 'assets/icons/loading';

const Register = () => {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!user) {
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then(async (userCredential) => {
          setLoading(false);
          const { user } = userCredential;

          toast.success('Registrasi berhasil', {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
              fontSize: '12px',
            },
          });

          await addDoc(collection(firestore, 'users'), {
            uid: user?.uid,
            displayName: name,
            authProvider: 'local',
            email,
          }).then(() => {
            setLoading(false);
            dispatch({
              type: actionType.SET_USER,
              user: { ...user?.providerData[0], displayName: name },
            });
            localStorage.setItem(
              'user',
              JSON.stringify({ ...user?.providerData[0], displayName: name })
            );

            navigate('/', { replace: true });
          });
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
      <div className='container py-0 px-0 h-full min-h-[92vh]'>
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
                    <form onSubmit={handleSubmit}>
                      <p className='mb-2'>Daftarkan akun Anda</p>

                      <div className='mb-4'>
                        <input
                          id='name'
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Nama'
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          id='email'
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Email'
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          id='password'
                          type='password'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Password'
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className='text-center pt-1 pb-1'>
                        <button
                          type='submit'
                          className='inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                          data-mdb-ripple='true'
                          data-mdb-ripple-color='light'
                          style={{
                            background:
                              'linear-gradient(to right, #ee7724,#d8363a, #dd3675,#b44593)',
                          }}
                        >
                          {loading && <LoadingIcon />} Daftar
                        </button>
                      </div>
                      <div className='flex items-center justify-between pb-6'>
                        <p className='mb-0 mr-2'>Sudah punya akun?</p>
                        <Link to='/login'>Masuk</Link>
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

export default Register;
