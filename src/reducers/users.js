const users = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USERS_SUCCESS':
      return { ...state, offline: [...action.payload] };
    case 'GET_USER_STARUS':
      return { ...state, myStatus: action.payload };
    default:
      return state;
  }
};
export default users;
