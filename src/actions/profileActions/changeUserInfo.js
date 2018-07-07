import axios from 'axios';
import { serverURL } from '../../const';

export default function changeUserInfo(data) {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    axios.post(`${serverURL}/profile/info`, { token, ...data }).then((response) => {
      if (response.data.userLogin) {
        dispatch({ type: 'CHANGE_INFO_SUCCESS', payload: response.data });
      } else dispatch({ type: 'CHANGE_INFO_ERROR', payload: response.data.error });
    })
      .catch((error) => {
        dispatch({ type: 'CHANGE_INFO_ERROR', payload: error });
      });
  };
}
