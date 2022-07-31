import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase.config';

const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
  }, [user, navigate]);

  // Apabila kondisinya masih dalam tahap loading, kita berikan halaman kosong
  if (isLoading) {
    return;
  } else {
    // Bila tidak isLoading (berarti sudah selesai)
    // Kita kembalikan children yang ingin dirender
    return children;
  }

  // // Apabila semua baik baik saja, kita akan mengembalikan children
  // return isLoading ? "" : children;
};

export default ProtectedComponent;
