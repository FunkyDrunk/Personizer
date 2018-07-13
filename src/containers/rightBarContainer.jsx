import React, { Component } from 'react';
import RightBar from '../components/rightBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import newConference from '../actions/conference/newConference'

class RightBarContainer extends Component {
  state = {
    createNewConferenceName: "",
  }
  handleChangeName = (event) => {
    this.setState({
      createNewConferenceName: event.target.value
    })
  }

  createNewConference = () => {
    this.props.newConference(this.state.createNewConferenceName)
  }
  render() {
    return (
      <RightBar conference={this.props.conference.conferenceArray} handleChangeName={this.handleChangeName} createNewConferenceName={this.state.createNewConferenceName} createNewConference={this.createNewConference}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // push: bindActionCreators(push, dispatch),
    newConference: bindActionCreators(newConference, dispatch),
    // signIn: bindActionCreators(signIn, dispatch),
    // forgotPass: bindActionCreators(forgotPass, dispatch),
  };
}

function mapStateToProps (state) {
  return {
    ...state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightBarContainer);
