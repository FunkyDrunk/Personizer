import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class UsersItem extends PureComponent {
  render() {
    return (
      <div
        onClick={() => {
          this.props.push(`/main/chat/${this.props.id}`);
          this.props.getChat(this.props.id); // FIXME: ppc...
          this.props.getChatMessages(this.props.id); // FIXME: ppc...
          }
        }
        className="left-bar-card"
      >
        <img width="50" heigth="50" src={this.props.avatar} alt="user avatar" />
        <p>{this.props.name}</p>
        <p> ({this.props.status ? 'Online' : 'Offline'})</p>
      </div>
    );
  }
}

export default UsersItem;
