const profile = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_PROFILE':
      return { ...action.payload };
    case 'CHANGE_INFO_SUCCESS':
      return { ...state, ...action.payload };
    case 'CHANGE_INFO_ERROR':
      return { ...state, error: action.payload };
    case 'CHANGE_PASSWORD_SUCCESS':
      return { ...state, ...action.payload };
    case 'CHANGE_PASSWORD_ERROR':
      return { ...state, error: action.payload };
    case 'CHANGE_AVATAR_SUCCESS':
      return { ...state, ...action.payload };
    case 'CHANGE_AVATAR_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export default profile;
