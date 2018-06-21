import axios from 'axios';
import { push } from 'react-router-redux';
import { serverURL } from '../../const';

export default function signUp(email, name, password) {
  return (dispatch) => {
    dispatch({ type: 'REGISTRATION_SEND' });
    axios({
      method: 'post',
      url: `${serverURL}/registration/`,
      data: {
        email,
        name,
        password,
      },
    }).then((response) => {
      if (response.data.token) {
        window.localStorage.setItem('PersonToken', response.data.token);
        dispatch({ type: 'REGISTRATION_SUCCESS', payload: response.data });
        dispatch(push('/'));
      } else {
        dispatch({ type: 'REGISTRATION_ERROR', payload: response.data });
        setTimeout(() => {
          dispatch({ type: 'REGISTRATION_ERROR', payload: { ...response.data, errMsg: null, errType: null } });
        }, 3000);
      }
    })
      .catch((error) => {
        dispatch({ type: 'REGISTRATION_ERROR', payload: error });
      });
  };
}
