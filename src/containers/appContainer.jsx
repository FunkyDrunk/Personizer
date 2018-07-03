import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HeaderContainer from './headerContainer';
import LeftBarContainer from './leftBarContainer';
import RightBarContainer from './rightBarContainer';
import ChatBodyContainer from './chatBodyContainer';
import ProfilePageContainer from './profilePageContainer';

import signWithToken from '../actions/userActions/tokenSign';
import sendStatus from '../actions/userList/sendStatus';

class AppContainer extends Component {
  componentDidMount() {
    if (window.localStorage.getItem('PersonToken')) {
      this.props.signWithToken();
      this.props.sendStatus();
    } else this.props.push('/start/');
  }
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <div className="main-content">
          <LeftBarContainer />
          <Route path="/main/chat/:id" component={ChatBodyContainer} />
          <Route path="/main/profile" component={ProfilePageContainer} />
          <Route path="/main/chat" component={RightBarContainer} />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    push: bindActionCreators(push, dispatch),
    signWithToken: bindActionCreators(signWithToken, dispatch),
    sendStatus: bindActionCreators(sendStatus, dispatch),
    // forgotPass: bindActionCreators(forgotPass, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
