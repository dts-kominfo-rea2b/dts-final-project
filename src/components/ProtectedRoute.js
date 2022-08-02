import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';

import { auth } from '../config/firebase';

const ProtectedRoute = ({ children, isLogin = true }) => {
  const [user] = useAuthState(auth);

  if (user && !isLogin) {
    return <Navigate to='/home' />;
  }

  if (!user && isLogin) {
    return <Navigate to='/' />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
