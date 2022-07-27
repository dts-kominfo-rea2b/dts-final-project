import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../libs/firebase";

const ProtectedRoute = ({ children, loginOnly = true }) => {
  const [user, loading, error] = useAuthState(auth)

  if (user?.email && !loginOnly) {
    return <Navigate to={'/'} />
  }

  if (!user?.email && loginOnly) {
    return <Navigate to={'/login'} />
  }

  return children;
}

export default ProtectedRoute;