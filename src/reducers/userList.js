const usersList = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER_LIST_SUCCESS':
      return { ...state, users: action.payload };
    case 'GET_USER_STARUS':
      return { ...state, myStatus: action.payload };
    default:
      return state;
  }
};
export default usersList;
