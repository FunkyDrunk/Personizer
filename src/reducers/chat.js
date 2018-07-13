const chat = (state = { messages: {}, newMessagesCount: {}, conference: [] }, action) => {
  switch (action.type) {
    case 'GET_USER_INFO_SUCCESS':
      return { ...state, user: action.payload };
    case 'GET_USER_MESSAGES_SUCCESS':
      return { ...state, messages: action.payload.messages, newMessagesCount: action.payload.newMessagesCount };
    case 'VIEW_MESSAGE':
      if (state.newMessagesCount[action.payload.userId]) {
        state.newMessagesCount[action.payload.userId] = 0;
      }
      return { ...state };
    case 'USER_CHECKED_MESSAGES':
      state.messages[action.payload.from] = action.payload.messages.reverse();
      return { ...state };
    case 'GIVE_NEW_MESSAGE_SUCCESS': // FIXME: sender = SEND_MESSAGE_SUCCESS
      if (action.payload.sender) {
        if (state.messages[action.payload.message.to]) {
          state.messages[action.payload.message.to].unshift(action.payload.message);
        } else {
          state.messages[action.payload.message.to] = [action.payload.message];
        }
        return { ...state };
      }
      if (!action.payload.sender) {
        if (state.newMessagesCount[action.payload.message.from]) {
          state.newMessagesCount[action.payload.message.from] += 1;
        } else {
          state.newMessagesCount[action.payload.message.from] = 1;
        }
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
