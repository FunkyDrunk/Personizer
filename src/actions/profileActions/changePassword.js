import axios from 'axios';
import { serverURL } from '../../const';

export default function changePassword(data) {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    axios.post(`${serverURL}/profile/password`, { token, ...data }).then((response) => {
      console.log(response.data);
      if (response.data.userLogin) {
        dispatch({ type: 'CHANGE_PASSWORD_SUCCESS', payload: response.data });
      } else dispatch({ type: 'CHANGE_PASSWORD_ERROR', payload: response.data });
    })
      .catch((error) => {
        dispatch({ type: 'CHANGE_PASSWORD_ERROR', payload: error });
      });
  };
}
