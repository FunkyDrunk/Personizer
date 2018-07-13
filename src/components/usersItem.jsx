import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class UsersItem extends PureComponent {
  render() {
    return (
      <Link
        to={`/main/chat/${this.props.id}`}
        className="left-bar-card"
      >
        <img width="50" heigth="50" src={this.props.avatar} alt="user avatar" />
        <p>{this.props.name}</p>
        <p> ({this.props.status ? 'Online' : 'Offline'})</p>
        <p>{this.props.newMessages && this.props.newMessages != 0? 'New messages ' +this.props.newMessages : null} </p>
      </Link>
    );
  }
}

export default UsersItem;
