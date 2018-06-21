import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import StartPage from '../components/startPage';
import LoginFormContainer from './loginFormContainer';

class StartPageContainer extends Component {
  render() {
    return (
      <Fragment>
        <StartPage />
        <Route path="/start/login" render={props => <LoginFormContainer {...props} formType="login" />} />
        <Route path="/start/registration" render={props => <LoginFormContainer {...props} formType="registration" />} />
        <Route path="/start/forgot" render={props => <LoginFormContainer {...props} formType="forgot" />} />
      </Fragment>
    );
  }
}

export default StartPageContainer;
