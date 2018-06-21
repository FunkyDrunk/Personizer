const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SEND':
      return { loading: true };
    case 'LOGIN_SUCCESS':
      return { ...action.payload, loading: false };
    case 'LOGIN_ERROR':
      return { error: action.payload, loading: false };
    case 'REGISTRATION_SEND':
      return { loading: true };
    case 'REGISTRATION_SUCCESS':
      return { ...action.payload, loading: false };
    case 'REGISTRATION_ERROR':
      return { error: action.payload, loading: false };
    case 'FORGOT_SEND':
      return { loading: true };
    case 'FORGOT_SUCCESS':
      return { ...action.payload, loading: false };
    case 'FORGOT_ERROR':
      return { error: action.payload, loading: false };
    case 'LOG_OUT':
      return {};
    default:
      return state;
  }
};
export default user;
