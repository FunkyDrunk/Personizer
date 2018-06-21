import axios from 'axios';
import { serverURL } from '../../const';

export default function forgotPass(email) {
  return (dispatch) => {
    dispatch({ type: 'FORGOT_SEND' });
    axios.post(`${serverURL}/forgot/`, { email }).then((response) => {
      if (response.data.token) {
        window.localStorage.setItem('PersonToken', response.data.token);
        dispatch({ type: 'FORGOT_SUCCESS', payload: response.data });
      } else {
        dispatch({ type: 'FORGOT_ERROR', payload: response.data });
        setTimeout(() => {
          dispatch({ type: 'FORGOT_ERROR', payload: { ...response.data, errMsg: null, errType: null } });
        }, 3000);
      }
    })
      .catch((error) => {
        dispatch({ type: 'FORGOT_ERROR', payload: error });
      });
  };
}
