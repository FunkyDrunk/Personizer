import axios from 'axios';
import { serverURL } from '../../const';

export default function changeAvatar(data) {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    axios.post(`${serverURL}/profile/avatar`, { token, data }).then((response) => {
      console.log(response.data);
      if (response.data.msg) {
        dispatch({ type: 'CHANGE_AVATAR_SUCCESS', payload: response.data });
      } else dispatch({ type: 'CHANGE_AVATAR_ERROR', payload: response.data.error });
    })
      .catch((error) => {
        dispatch({ type: 'CHANGE_AVATAR_ERROR', payload: error });
      });
  };
}
