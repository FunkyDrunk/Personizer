
import io from 'socket.io-client';
import { serverURL } from '../../const';

export default function getMessages(userId) {
  const token = window.localStorage.getItem('PersonToken');
  const users = io.connect(`${serverURL}/chat`);
  return (dispatch) => {
    users.on('connect', () => {
      users.emit('getMessages', { token, userId }, (data) => {
        dispatch({ type: 'GET_USER_MESSAGES_SUCCESS', payload: data });
      });
    });
  };
}
