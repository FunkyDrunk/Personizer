import axios from 'axios';
import { serverURL } from '../../const';

export default function signWithToken() {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    axios.post(`${serverURL}/login/`, { token }).then((response) => {
      if (response.data.name) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      } else dispatch({ type: 'LOGIN_ERROR', payload: response.data.error });
    })
      .catch((error) => {
        dispatch({ type: 'LOGIN_ERROR', payload: error });
      });
  };
}
