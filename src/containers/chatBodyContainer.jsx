import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ChatBody from '../components/chatBody';
import sendMessage from '../actions/chatActions/sendMessage';
import vievMessages from '../actions/chatActions/vievMessages';


class ChatBodyContainer extends Component {
  state = {
    message:'',
    messages: [],
    member: {},
  }

  sendViev = () => {
    vievMessages(this.poros.match.params.id)
  }
  changeMessages = (setMessages) => {
    this.setState({
      messages: setMessages
    })
  }

  changeMember = (setMember) => {
    this.setState({
      member: setMember
    })
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
    console.log(this.props)
    let member;
    if(this.props.users.offline){
      member = this.props.users.offline.filter( elem => {
        if(elem.id === this.props.match.params.id) return elem
      }).shift()
    }
    return (
      <ChatBody
      messages={this.props.chat.messages?this.props.chat.messages[this.props.match.params.id]:[]}
      vievMessages={this.sendViev}
      chatUser={'' || member}
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
    sendMessage: bindActionCreators(sendMessage, dispatch),
    vievMessages: bindActionCreators(vievMessages, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBodyContainer);
