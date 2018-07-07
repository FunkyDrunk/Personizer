import { users } from '../chatSocket';

export default function getMessages() {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    users.emit('getMessages', { token }, (data) => {
      dispatch({ type: 'GET_USER_MESSAGES_SUCCESS', payload: data });
    });
    users.on('giveNewMessage', (data) => {
      dispatch({ type: 'GIVE_NEW_MESSAGE_SUCCESS', payload: data });
    });
  };
}
