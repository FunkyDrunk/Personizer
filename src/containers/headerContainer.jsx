import React, { Component } from 'react';
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


function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(HeaderContainer);
