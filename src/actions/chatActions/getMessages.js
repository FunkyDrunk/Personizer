import { users } from '../chatSocket';

export default function getMessages() {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    users.emit('getMessages', { token }, (data) => {
      const newMessagesCount = {};
      Object.keys(data).forEach((elem) => {
        newMessagesCount[elem] = data[elem].reduce((counter, message) => {
          message.from === elem && !message.viewed ? counter += 1 : null;
          return counter
        },0);
      });
      dispatch({ type: 'GET_USER_MESSAGES_SUCCESS', payload: {messages: data, newMessagesCount} });
    });
    users.on('giveNewMessage', (data) => {
      dispatch({ type: 'GIVE_NEW_MESSAGE_SUCCESS', payload: data });
    });
    users.on('viewMessages', (messages) => {
      dispatch({ type: 'USER_CHECKED_MESSAGES', payload: messages });
    });
  };
}
