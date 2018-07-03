import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import getUsers from '../actions/userList/getUsers';
import LeftBar from '../components/leftBar';
import getUser from '../actions/chatActions/getUser';
import getMessages from '../actions/chatActions/getMessages';

class LeftBarContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <LeftBar {...this.props.users} push={this.props.push} getChatMessages={this.props.getMessages} getChat={this.props.getUser}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    push: bindActionCreators(push, dispatch),
    getUsers: bindActionCreators(getUsers, dispatch),
    getUser: bindActionCreators(getUser, dispatch), // FIXME: omg
    getMessages: bindActionCreators(getMessages, dispatch), // FIXME: omg
  };
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftBarContainer);
