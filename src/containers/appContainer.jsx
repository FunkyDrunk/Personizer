import React, { Component } from 'react';
import HeaderContainer from './headerContainer';
import LeftBarContainer from './leftBarContainer';
import RightBarContainer from './rightBarContainer';
import PersonListContainer from './personListContainer';
import LoginFormContainer from './loginFormContainer';
import RegistrationFormContainer from './registrationFormContainer';
import ChatBodyContainer from './chatBodyContainer';

class AppContainer extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <div className="main-content">
          <LeftBarContainer />
          <ChatBodyContainer />
          <RightBarContainer />
        </div>
      </div>
    );
  }
}

export default AppContainer;
