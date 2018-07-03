const chat = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER_INFO_SUCCESS':
      return { ...state, user: action.payload };
    case 'GET_USER_MESSAGES_SUCCESS':
      const messages = action.payload.reverse();
      return { ...state, messages };
    case 'GIVE_NEW_MESSAGE_SUCCESS':
      return { ...state, messages: [action.payload, ...state.message] };

    default:
      return state;
  }
};
export default chat;
