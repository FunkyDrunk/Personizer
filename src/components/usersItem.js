import React, { PureComponent } from 'react';

class UsersItem extends PureComponent {
  render() {
    return (
      <div className="left-bar-card">
        <img width="50" heigth="50" src={this.props.avatar} alt="user avatar"/>
        <p>{this.props.name}</p>
        <p> ({this.props.status?'Online':'Offline'})</p>
      </div>
    );
  }
}

export default UsersItem;
