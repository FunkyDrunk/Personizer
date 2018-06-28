import axios from 'axios';
import { serverURL } from '../../const';

export default function signWithToken() {
  const token = window.localStorage.getItem('PersonToken');
  return (dispatch) => {
    axios.post(`${serverURL}/login_with_token/`, { token }).then((response) => {
      const {
        token,
        userLogin,
        userRole,
        firstName,
        lastName,
        job,
        avatar,
      } = response.data;
      if (response.data.userLogin) {
        dispatch({ type: 'CREATE_PROFILE', payload: { firstName, lastName, job, avatar } });
        dispatch({ type: 'LOGIN_SUCCESS', payload: { userRole, userLogin, token } });
      } else dispatch({ type: 'LOGIN_ERROR', payload: response.data.error });
    })
      .catch((error) => {
        dispatch({ type: 'LOGIN_ERROR', payload: error });
      });
  };
}
