const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        userData: action.payload.data,
        isLoggedIn: true,
        loading: false,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        userData: action.payload.data,
        isLoggedIn: true,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_USER_CREDENTIALS':
      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload,
      };
    case 'REGISTER_FAIL':
      return {
        ...state,
        message: action.payload.error,
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        message: action.payload.error,
        isLoggedIn: false,
        userData: {},
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        userData: {},
      };
    case 'CLEAR_MESSAGE':
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
};

export default authReducer;
