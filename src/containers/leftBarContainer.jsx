import React, { Component } from 'react';
import { connect } from 'react-redux';

import LeftBar from '../components/leftBar';

class LeftBarContainer extends Component {
  render() {
    if (this.props.usersList.users && this.props.chat.newMessagesCount) {    // FIXME: какой то дикий кастыль
      const counterUsersId = Object.keys(this.props.chat.newMessagesCount);
      const users = this.props.usersList.users.map((user) => {
        counterUsersId.forEach((id) => {
          if (user.id === id) {
            user.newMessages = this.props.chat.newMessagesCount[id];
          }
        });
        return user;
      });
      return (
        <LeftBar users={users}/>
      );
    }
    return (
      <LeftBar {...this.props.userList}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(LeftBarContainer);
