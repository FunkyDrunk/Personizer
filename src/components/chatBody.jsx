import React, { Component } from 'react';

import ChatForm from './chatForm';
import ChatMessage from './chatMessage';
import '../styles/chatBody.css';

class ChatBody extends Component {
  render() {
    return (
      <div className="chat-body">
        <div className="chat-header">
          <h3>{this.props.chatUser.name}</h3>
          <h4>{this.props.chatUser.job}</h4>
        </div>
        <div className="chat-content">
          {this.props.messages.map((elem) => {
            const textMessage = elem.text;
            const date = elem.created;
            if (elem.from === this.props.chatUser.id) {
              const userAvatar = this.props.chatUser.avatar;
              const userName = this.props.chatUser.name;
              return <ChatMessage key={elem._id} userAvatar={userAvatar} userName={userName} date={date} textMessage={textMessage} />;
            }else{
              const { userAvatar, userName } = this.props
              return <ChatMessage key={elem._id} myMessage={true} viewed={elem.viewed} messageRigth={true} userAvatar={userAvatar} userName={userName} date={date} textMessage={textMessage} />;
            }
          })
          }
        </div>
        <ChatForm messageText={this.props.messageText} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}


export default ChatBody;


ChatBody.defaultProps = {
  chatUser: {
    name: '',
    avatar: '',
    job: '',
  },
  messages: [],
};
