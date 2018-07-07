import { users } from '../chatSocket';

export default function getUsers() {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    users.on('connect', () => {
      users.emit('getUsers', token, (data) => {
        dispatch({ type: 'GET_USER_LIST_SUCCESS', payload: data });
      });
    });
  };
}
