/* eslint-disable jsx-a11y/img-redundant-alt */
import { app, auth, storage } from 'firebase.config';
import { getAuth, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { Loader } from 'components';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoadingIcon from 'assets/icons/loading';
// import { collection, doc, updateDoc } from 'firebase/firestore';

const EditProfile = () => {
  const firebaseAuth = getAuth(app);
  const [user, loading] = useAuthState(auth);

  const [name, setName] = useState('');
  const [changePhoto, setChangePhoto] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Profile/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // const uploadProgress =
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);

        toast.error('Kesalahan saat mengunggah: Coba lagi 🙇', {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            fontSize: '12px',
          },
        });
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      toast.success('Gambar berhasil dihapus 😊', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '12px',
        },
      });
    });
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);
    const deleteRef = ref(storage, user?.photoURL);

    if (user?.photoURL) {
      deleteObject(deleteRef);
    }

    await updateProfile(firebaseAuth?.currentUser, {
      displayName: name ? name : user?.displayName,
      photoURL: imageAsset === null ? user?.photoURL : imageAsset,
    })
      .then(async () => {
        setLoadingSubmit(false);
        toast.success('Profil berhasil diubah 😊', {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            fontSize: '12px',
          },
        });

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        setLoadingSubmit(false);
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
  };
  return (
    <>
      {loading ? (
        <div className='grid place-items-center min-h-[85vh]'>
          <Loader />
        </div>
      ) : (
        <div>
          <div className='md:grid md:grid-cols-3 md:gap-6 mt-5 min-h-screen'>
            <div className='md:col-span-1'>
              <div className='px-4 sm:px-0'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  Data Pribadi
                </h3>
                <p className='mt-1 text-sm text-gray-600'>
                  Informasi ini akan ditampilkan secara publik jadi
                  berhati-hatilah dengan apa yang Anda bagikan.
                </p>
              </div>
            </div>
            <div className='mt-5 md:mt-0 md:col-span-2'>
              <Toaster />
              <form onSubmit={handleEditProfile}>
                <div className='shadow sm:rounded-md sm:overflow-hidden'>
                  <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                    <div>
                      <label
                        htmlFor='company-website'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Nama
                      </label>
                      <div className='mt-1'>
                        <input
                          id='displayName'
                          name='displayName'
                          type='text'
                          className='form-control block w-full px-3 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Nama'
                          defaultValue={user?.displayName}
                          // value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor='company-website'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Email
                      </label>
                      <div className='mt-1'>
                        <input
                          id='email'
                          name='email'
                          type='text'
                          className='form-control block w-full px-3 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Email'
                          value={user?.email}
                          disabled
                        />
                      </div>
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Foto Profil
                      </label>
                      <div className='mt-1 flex items-center'>
                        <span className='inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100'>
                          {user?.photoURL ? (
                            <img src={user?.photoURL} alt='' />
                          ) : (
                            <svg
                              className='h-full w-full text-gray-300'
                              fill='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                            </svg>
                          )}
                        </span>

                        {changePhoto ? (
                          <button
                            type='button'
                            className='ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            onClick={() => {
                              setChangePhoto(!changePhoto);
                            }}
                          >
                            Batal
                          </button>
                        ) : (
                          <button
                            type='button'
                            className='ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            onClick={() => {
                              setChangePhoto(true);
                            }}
                          >
                            Ubah
                          </button>
                        )}
                      </div>
                    </div>

                    {changePhoto && (
                      <>
                        {isLoading ? (
                          <div className='grid place-items-center'>
                            <Loader width='30px' height='30px' />
                          </div>
                        ) : (
                          <>
                            {!imageAsset ? (
                              <div>
                                <label className='block text-sm font-medium text-gray-700'>
                                  Upload Foto Profil
                                </label>
                                <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                                  <div className='space-y-1 text-center'>
                                    <svg
                                      className='mx-auto h-10 w-10 text-gray-400'
                                      stroke='currentColor'
                                      fill='none'
                                      viewBox='0 0 48 48'
                                      aria-hidden='true'
                                    >
                                      <path
                                        d='M28 8H12a4 4 0 00-4 4v30m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                    <div className='flex text-sm text-gray-600 items-center'>
                                      <p className='pr-1'>Click here to</p>
                                      <label className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500'>
                                        <span>Upload</span>
                                        <input
                                          type='file'
                                          name='uploadimage'
                                          accept='image/*'
                                          onChange={uploadImage}
                                          placeholder='Upload a file'
                                          className='w-0 h-0'
                                        />
                                      </label>
                                    </div>
                                    <p className='text-xs text-gray-500'>
                                      PNG, JPG up to 1MB
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <>
                                <div className='relative h-full'>
                                  <img
                                    src={imageAsset}
                                    alt='uploaded image'
                                    className='w-full h-full object-cover'
                                  />
                                  <button
                                    type='button'
                                    className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out'
                                    onClick={deleteImage}
                                  >
                                    <MdDelete className='text-white' />
                                  </button>
                                </div>
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </div>
                  <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                    <button
                      type='submit'
                      className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                    >
                      {loadingSubmit && <LoadingIcon />} Simpan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
