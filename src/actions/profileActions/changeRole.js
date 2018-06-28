import axios from 'axios';
import { serverURL } from '../../const';

export default function changeAvatar(data) {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    axios.post(`${serverURL}/profile/role`, { token, data }).then((response) => {
      if (response.data.msg) {
        dispatch({ type: 'CHANGE_ROLE_SUCCESS', payload: response.data });
      } else dispatch({ type: 'CHANGE_ROLE_ERROR', payload: response.data.error });
    })
      .catch((error) => {
        dispatch({ type: 'CHANGE_ROLE_ERROR', payload: error });
      });
  };
}
