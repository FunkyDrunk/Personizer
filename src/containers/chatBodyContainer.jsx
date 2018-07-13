import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ChatBody from '../components/chatBody';
import sendMessage from '../actions/chatActions/sendMessage';
import viewMessages from '../actions/chatActions/vievMessages';


class ChatBodyContainer extends Component {
  state = {
    message:'',
    messages: [],
    member: {},
  }

  componentWillUpdate(props){
    if(this.props.match.params.id != props.match.params.id){
      this.props.viewMessages(props.match.params.id)
    }
  }

  componentWillMount() {
    this.props.viewMessages(this.props.match.params.id)
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
    let member;
    if(this.props.usersList.users){
      member = this.props.usersList.users.filter( elem => {
        if(elem.id === this.props.match.params.id) return elem
      }).shift()
    }
    return (
      <ChatBody
      messages={this.props.chat.messages?this.props.chat.messages[this.props.match.params.id]:[]}
      vievMessages={()=>this.props.viewMessages(this.props.match.params.id)}
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
    viewMessages: bindActionCreators(viewMessages, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBodyContainer);
