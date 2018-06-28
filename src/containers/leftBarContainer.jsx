import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import getUsers from '../actions/userList/getUsers';
import LeftBar from '../components/leftBar';

class LeftBarContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <LeftBar {...this.props.users} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // push: bindActionCreators(push, dispatch),
    getUsers: bindActionCreators(getUsers, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftBarContainer);
