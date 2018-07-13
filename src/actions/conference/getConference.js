import { users } from '../chatSocket';

export default function getConference() {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    users.emit('getConference', { token }, (data) => {
      console.log(data);
      dispatch({ type: 'GET_CONFERENCE', payload: data });
    });
  };
}
