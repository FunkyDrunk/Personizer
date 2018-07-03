import React, { Component } from 'react';

import UsersItem from './usersItem';
import '../styles/leftBar.css';


class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar">
        <h3>Users </h3>
        <div> <input /> </div>
        {this.props.offline ? this.props.offline.map(user => <UsersItem name={user.name} avatar={user.avatar} key={user.id} id={user.id} status={user.online} push={this.props.push} getChatMessages={this.props.getChatMessages} getChat={this.props.getChat}/>) : null}
      </div>
    );
  }
}

export default LeftBar;
