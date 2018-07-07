import React, { Component } from 'react';
import { connect } from 'react-redux';

import LeftBar from '../components/leftBar';

class LeftBarContainer extends Component {
  render() {
    return (
      <LeftBar {...this.props.users}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(LeftBarContainer);
