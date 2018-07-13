import React, { Component } from 'react';

class AddConferenceField extends Component {
  render() {
    return (
      <div>
      <input value={this.props.createNewConferenceName} onChange={this.props.handleChangeName}/>
      <button onClick={this.props.createNewConference}>add new conference </button>
      </div>
    );
  }
}

export default AddConferenceField;
