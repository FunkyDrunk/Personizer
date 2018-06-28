import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PersonList from '../components/personList';
import getUsers from '../actions/userList/getUsers';

class PersonListContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    console.log('asd');
    return (
      <PersonList users={this.props.users} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonListContainer);
