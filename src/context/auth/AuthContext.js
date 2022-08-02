import { createContext, useReducer } from 'react'
import authReducer from './AuthReducer'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const initialState = {
    userData: {},
    isLoggedIn: false,
    loading: false,
    message: '',
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
