import { users } from '../chatSocket';

export default function sendMessage(userId, message) {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    users.emit('sendMessage', { token, userId, message }, (data) => {
      dispatch({ type: 'SEND_MESSAGE_SUCCESS', payload: data });
    });
  };
}
