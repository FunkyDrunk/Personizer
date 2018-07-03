import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import signUp from '../actions/userActions/registration';
import signIn from '../actions/userActions/login';
import forgotPass from '../actions/userActions/forgotPass';
import LoginForm from '../components/loginForm';

class LoginFormContainer extends Component {
  state = {
    out:false,
    formValues:{
      email:'',
      login:'',
      password:''
    }
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value
    this.setState({
      formValues:{
        ...this.state.formValues,
        [name]: value
      }
    });
  }
  handleSubmit = (event) => {
      const { email, login, password } = this.state.formValues
    switch (this.props.formType) {
      case 'login':
      this.props.signIn(login, password)
        break;
      case 'registration':
      this.props.signUp(email, login, password)
        break;
      case 'forgot':
      this.props.forgotPass(email)
        break;
      default: return (<div>404</div>)
    }
  }

  closeModal = (event) => {
    if(event.target.className.includes('close-modal')){
      this.setState({
          out:true
        })
        var props = this.props
        this.props.user.error = {errMsg:null, errType:null}
        setTimeout(function () {
          props.push('/start')
        }, 1000);
      }

  }
  render() {
    const loginForm = {
      title: 'Login',
      email: false,
      submitButton: 'Sign In',
      forgotLink: true
    }
    const registrationForm = {
      title: 'Registration',
      email: true,
      submitButton: 'Create account',
      forgotLink: false
    }
    const forgotForm = {
      title: 'Forgot Password?',
      email: true,
      submitButton: 'Send',
      forgotLink: false,
      forgot:true
    }
    var formProps = {}
    switch (this.props.formType) {
      case 'login':
        formProps = loginForm;
        break;
      case 'registration':
        formProps = registrationForm;
        break;
      case 'forgot':
        formProps = forgotForm;
        break;
      default: return (<div>404</div>)
    }
    return (
        <LoginForm
        closeModal={this.closeModal}
        out={this.state.out}
        {...formProps}
        formValues={this.state.formValues}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        loading={this.props.user.loading}
        err={this.props.user.error}
        />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    push: bindActionCreators(push, dispatch),
    signUp: bindActionCreators(signUp, dispatch),
    signIn: bindActionCreators(signIn, dispatch),
    forgotPass: bindActionCreators(forgotPass, dispatch),
  };
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
