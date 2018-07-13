import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import closeButton from '../img/closeButton.png';

import '../styles/modal.css';


import '../styles/loginForm.css';

class LoginForm extends Component {
  render() {
    return (
      <div
        className={
        this.props.out ? 'login-form out-bg'
        : 'login-form close-modal'}
        onClick={this.props.closeModal}
        role="presentation"
      >
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear
          transitionAppearTimeout={1000}
        >
          <div className={this.props.out ? 'login-form-modal out-form' : 'login-form-modal'}>
            <div className="login-form-modal-close close-modal"><img src={closeButton} alt="close" className="close-modal" /></div>
            <h3>{this.props.title}</h3>
            {this.props.forgot &&
              <p>
                Please enter your email address below<br />
                to receive a password reset link.
              </p>
            }
            {this.props.email &&
              <Fragment>
                <p> Email </p>
                <input
                  className={this.props.err.errType === 'email' ? 'login-form-modal-error-form' : null}
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={this.props.formValues.email}
                  onChange={this.props.handleChange}
                />
              </Fragment>
            }
            {!this.props.forgot &&
              <Fragment>
                <p> Login </p>
                <input
                  className={this.props.err.errType === 'login' ? 'login-form-modal-error-form' : null}
                  name="login"
                  type="text"
                  placeholder="Login"
                  value={this.props.formValues.login}
                  onChange={this.props.handleChange}
                />
                <p> Password</p>
                <input
                  className={this.props.err.errType === 'password' ? 'login-form-modal-error-form' : null}
                  name="password"
                  type="text"
                  placeholder="Password"
                  value={this.props.formValues.password}
                  onChange={this.props.handleChange}
                />
              </Fragment>
            }
            {this.props.err.success ? <p>{this.props.err.success}</p> : null} { // FIXME: Ошибку поправить
            }
            {this.props.err ? <p className="login-form-modal-error">{this.props.err.errMsg}</p> : null}
            {this.props.loading ? <p className="login-form-modal-loader" >Loading...</p> : <button onClick={this.props.handleSubmit}> {this.props.submitButton}</button>}
            {this.props.forgotLink ? <Link to="/start/forgot" className="login-form-modal-forgot"> Forgot password?</Link> : null}
          </div>
        </CSSTransitionGroup>
      </div>
    );
  }
}


export default LoginForm;


LoginForm.propTypes = {
  forgot: PropTypes.bool.isRequired,
  forgotLink: PropTypes.bool.isRequired,
  email: PropTypes.bool.isRequired,
  out: PropTypes.bool.isRequired,
  submitButton: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    email: PropTypes.string,
    login: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  err: PropTypes.shape({
    errMsg: PropTypes.string,
    errType: PropTypes.string,
    success: PropTypes.string,
  }),
  loading: PropTypes.string,
};
LoginForm.defaultProps = {
  err: { errMsg: null, errType: null, success: null },
  loading: false,

};
