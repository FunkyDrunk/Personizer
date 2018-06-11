import React, { Component } from 'react';

import '../styles/loginForm.css';

class LoginForm extends Component {
  render() {
    return (
      <div className="login-form">
        <div className="login-form-modal">
          <div className="login-form-modal-close">X</div>
          <h3>Login</h3>
          <p> Login </p>
          <input type="text" placeholder="Login" />
          <p> Password</p>
          <input type="text" placeholder="Password" />
          <button> Submit </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
