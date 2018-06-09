const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.payload;
    case 'REGISTRATION_SUCCESS':
      return action.payload;
    case 'LOGIN_ERROR':
      return { error: action.payload };
    case 'REGISTRATION_ERROR':
      return { error: action.payload };
    case 'LOG_OUT':
      return {};
    default:
      return state;
  }
};
export default user;
