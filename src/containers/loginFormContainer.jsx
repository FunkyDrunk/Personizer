import React, { Component } from 'react';
import LoginForm from '../components/loginForm';

class LoginFormContainer extends Component {
  state= {
    openLoginForm: true,
  }

  render() {
    console.log(this.state)
    return (
      <LoginForm />
    );
  }
}

export default LoginFormContainer;
