const chat = (state = { messages: {} }, action) => {
  switch (action.type) {
    case 'GET_USER_INFO_SUCCESS':
      return { ...state, user: action.payload };
    case 'GET_USER_MESSAGES_SUCCESS':
      return { ...state, messages: action.payload };
    case 'GIVE_NEW_MESSAGE_SUCCESS':
      if (action.payload.sender) {
        if (state.messages[action.payload.message.to]) {
          state.messages[action.payload.message.to].unshift(action.payload.message);
        } else {
          state.messages[action.payload.message.to] = [action.payload.message];
        }
        return { ...state };
      }
      if (!action.payload.sender) {
        if (state.messages[action.payload.message.from]) {
          state.messages[action.payload.message.from].unshift(action.payload.message);
        } else {
          state.messages[action.payload.message.from] = [action.payload.message];
        }
        return { ...state };
      }
    default:
      return state;
  }
};
export default chat;
