import axios from 'axios';
import { push } from 'react-router-redux';
import { serverURL } from '../../const';

export default function signIn(name, password) {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_SEND' });
    axios.post(`${serverURL}/login/`, {
      name,
      password,
    }).then((response) => {
      if (response.data.token) {
        window.localStorage.setItem('PersonToken', response.data.token);
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
        dispatch(push('/'));
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
