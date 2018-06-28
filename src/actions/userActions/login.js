import axios from 'axios';
import { push } from 'react-router-redux';
import { serverURL } from '../../const';

export default function signIn(login, password) {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_SEND' });
    axios.post(`${serverURL}/login/`, {
      login,
      password,
    }).then((response) => {
      const {
        token,
        userLogin,
        userRole,
        firstName,
        lastName,
        job,
        avatar,
      } = response.data;
      if (response.data.token) {
        window.localStorage.setItem('PersonToken', token);
        dispatch({ type: 'CREATE_PROFILE', payload: { firstName, lastName, job, avatar } });
        dispatch({ type: 'LOGIN_SUCCESS', payload: { userRole, userLogin, token } });
        dispatch(push('/main'));
      } else {
        dispatch({ type: 'LOGIN_ERROR', payload: response.data });
        setTimeout(() => {
          dispatch({ type: 'LOGIN_ERROR', payload: { ...response.data, errMsg: null, errType: null } });
        }, 3000);
      }
    })
      .catch((error) => {
        dispatch({ type: 'LOGIN_ERROR', payload: error });
      });
  };
}
