import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../config/firebase';

const ProtectedRoute = ({ children, loginOnly = true }) => {
    const [user] = useAuthState(auth);
    if (!user && loginOnly) {
        return (<Navigate to='/login'></Navigate>);
    }
    if (user && !loginOnly) {
        return (<Navigate to='/'></Navigate>);
    }    

    return children;
}

export default ProtectedRoute;