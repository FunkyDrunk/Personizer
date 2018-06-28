
import io from 'socket.io-client';
import { serverURL } from '../../const';

export default function getUsers() {
  const token = window.localStorage.getItem('PersonToken');
  const users = io.connect(`${serverURL}/users`);
  return (dispatch) => {
    users.on('connect', () => {
      users.emit('getUsers', token, (data) => {
        dispatch({ type: 'GET_USERS_SUCCESS', payload: data });
      });
    });
  };
}
