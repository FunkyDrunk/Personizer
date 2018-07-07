import { users } from '../chatSocket';

export default function getMessages(userId) {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    users.emet('vievMessages', userId)
  };
}
