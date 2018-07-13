import { users } from '../chatSocket';

export default function sendStatus() {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    users.emit('sendStatus', token, (data) => {
      dispatch({ type: 'GET_USER_STARUS', payload: data });
    });
    users.on('statusChange', () => {
      users.emit('getUsers', token, (data) => {
        dispatch({ type: 'GET_USER_LIST_SUCCESS', payload: data });
      });
    });
  };
}
