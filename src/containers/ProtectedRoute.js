import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { Navigate } from 'react-router-dom'; 

const ProtectedRoute = ({children, loginOnly = true}) => {

    const [user] = useAuthState(auth);

    if(user && !loginOnly) //Jika sudah login, maka gakbisa akses halaman login dan register
    {
        return <Navigate to={"/"}></Navigate>
    }

    if(!user && loginOnly)
    {
        return <Navigate to={"/login"}></Navigate>
    }

    return children; //Jika Tidak Keduanya
}

export default ProtectedRoute;