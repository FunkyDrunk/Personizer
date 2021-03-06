import React, { Component } from 'react';

import ChatForm from './chatForm';
import ChatMessage from './chatMessage';
import '../styles/chatBody.css';

class ChatBody extends Component {
  render() {
    return (
      <div className="chat-body">
        {this.props.chatUser ?
          <div className="chat-header">
            <h3>{this.props.chatUser.name}</h3>
            <h4>{this.props.chatUser.job}</h4>
          </div>
            : null}
        <div className="chat-content">
          {this.props.messages && this.props.messages.map((elem) => {
            const textMessage = elem.text;
            const date = elem.created;
            if (elem.from === this.props.chatUser.id) {
              const userAvatar = this.props.chatUser.avatar;
              const userName = this.props.chatUser.name;
              return (<ChatMessage
                key={elem._id}
                userAvatar={userAvatar}
                userName={userName}
                date={date}
                textMessage={textMessage}
              />);
            }
              const { userAvatar, userName } = this.props;
              // FIXME: myMessage and messageRigth
              return (<ChatMessage
                key={elem._id}
                myMessage
                viewed={elem.viewed}
                messageRigth
                userAvatar={userAvatar}
                userName={userName}
                date={date}
                textMessage={textMessage}
              />);
          })
          }
        </div>
        <ChatForm vievMessages={this.props.vievMessages} messageText={this.props.messageText} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} />
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
