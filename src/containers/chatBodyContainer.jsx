import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ChatBody from '../components/chatBody';
import getUser from '../actions/chatActions/getUser';
import sendMessage from '../actions/chatActions/sendMessage';
import getMessages from '../actions/chatActions/getMessages';


class ChatBodyContainer extends Component {
  state = {
    message:'',
  }
  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
    this.props.getMessages(this.props.match.params.id);
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userId = this.props.match.params.id;
    const textMessage = this.state.message;
    this.props.sendMessage(userId, textMessage);
    this.setState({
      message: ''
    })
  }


  render() {
    console.log(this.state)
    return (
      <ChatBody
      messages={this.props.chat.messages}
      chatUser={this.props.chat.user}
      messageText={this.state.message}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      userName={this.props.profile.firstName && this.props.profile.lastName ?
        `${this.props.profile.firstName} ${this.props.profile.lastName}` :
        this.props.profile.firstName || this.props.profile.lastName || this.props.user.userLogin}
        userAvatar={this.props.profile.avatar}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: bindActionCreators(getUser, dispatch),
    sendMessage: bindActionCreators(sendMessage, dispatch),
    getMessages: bindActionCreators(getMessages, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBodyContainer);
