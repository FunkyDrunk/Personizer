
import io from 'socket.io-client';
import { serverURL } from '../../const';

export default function getUser(userId) {
  const token = window.localStorage.getItem('PersonToken');
  const users = io.connect(`${serverURL}/chat`);
  return (dispatch) => {
    users.on('connect', () => {
      users.emit('getUser', { token, userId }, (data) => {
        dispatch({ type: 'GET_USER_INFO_SUCCESS', payload: data });
      });
    });
  };
}
