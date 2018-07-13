import React, { Component } from 'react';
import '../styles/rightBar.css';
import AddConferenceField from './addConferenceField';

class RightBar extends Component {
  render() {
    return (
      <div className="rigth-bar">
        <h3>Conference</h3>
        <AddConferenceField handleChangeName={this.props.handleChangeName} createNewConferenceName={this.props.createNewConferenceName} createNewConference={this.props.createNewConference} />
        {this.props.conference && this.props.conference.map(elem => (
          <h4>{elem.conferenceName}</h4>
          ))}
      </div>
    );
  }
}

export default RightBar;
