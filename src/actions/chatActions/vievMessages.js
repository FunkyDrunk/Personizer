import { users } from '../chatSocket';

export default function viewMessages(userId) {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    users.emit('viewMessages', { token, userId });
    dispatch({ type: 'VIEW_MESSAGE', payload: { userId } });
  };
}
