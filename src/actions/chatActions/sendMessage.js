
import io from 'socket.io-client';
import { serverURL } from '../../const';

export default function sendMessage(userId, message) {
  const token = window.localStorage.getItem('PersonToken');
  const users = io.connect(`${serverURL}/chat`);

  return (dispatch) => {
    users.on('connect', () => {
      users.emit('sendMessage', { token, userId, message }, (data) => {
        dispatch({ type: 'SEND_MESSAGE_SUCCESS', payload: data });
      });
    });
  };
}
