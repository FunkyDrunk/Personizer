import { users } from '../chatSocket';

export default function createConference(conferenceName) {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    users.emit('createConference', { token, conferenceName }, (data) => {
      dispatch({ type: 'CREATE_CONFERENCE', payload: data });
    });
  };
}
