import React, { Component } from 'react';

import UsersItem from './usersItem';
import '../styles/leftBar.css';


class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar">
        <h3>Users </h3>
        <div> <input /> </div>
        {this.props.users && this.props.users.map(user => <UsersItem name={user.name} avatar={user.avatar} key={user.id} id={user.id} status={user.online} newMessages={user.newMessages}/>)}
      </div>
    );
  }
}

export default LeftBar;
