import io from 'socket.io-client';
import { serverURL } from '../../const';

export default function sendStatus() {
  const token = window.localStorage.getItem('PersonToken');
  const user = io.connect(`${serverURL}/status`);
  const users = io.connect(`${serverURL}/users`);
  return (dispatch) => {
    user.on('connect', () => {
      user.emit('sendStatus', token, (data) => {
        dispatch({ type: 'GET_USER_STARUS', payload: data });
      });
    });
    user.on('statusChange', () => {
      users.emit('getUsers', token, (data) => {
        dispatch({ type: 'GET_USER_LIST_SUCCESS', payload: data });
      });
    });
  };
}
