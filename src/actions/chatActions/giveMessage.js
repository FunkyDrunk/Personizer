
import io from 'socket.io-client';
import { serverURL } from '../../const';

export default function getMessages() {
  const token = window.localStorage.getItem('PersonToken');
  const users = io.connect(`${serverURL}/chat`);
  return (dispatch) => {
    users.on('connect', () => {
      users.on('giveMessage', (data) => {
        dispatch({ type: 'GIVE_NEW_MESSAGE_SUCCESS', payload: data });
      });
    });
  };
}
