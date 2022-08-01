import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import {auth} from '../config/firebase'

const UserContext = createContext()

export function AuthContextProvider ({children}) {
    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return() => {
            unsubscribe();
        }
    },[])

    return (
        <UserContext.Provider value={{user, createUser, logOut, logIn}}>
            {children}
        </UserContext.Provider>
    )
}

export function UserAuth () {
    return useContext(UserContext)
}