import React, { Component } from 'react';
// import { push } from 'react-router-redux';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Header from '../components/header';

class HeaderContainer extends Component {
  render() {
    const { firstName, lastName } = this.props.profile;
    return (
      <Header name={firstName && lastName ? `${firstName} ${lastName}` : firstName || lastName || this.props.user.userLogin} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // push: bindActionCreators(push, dispatch),
    // signUp: bindActionCreators(signUp, dispatch),
    // signIn: bindActionCreators(signIn, dispatch),
    // forgotPass: bindActionCreators(forgotPass, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
