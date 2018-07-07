import React, { Component } from 'react';

class ChatMessage extends Component {
  render() {
    return (
      <div className={`chat-content-message
        ${this.props.messageRigth && 'message-right'}
        ${this.props.myMessage && (this.props.viewed ? 'viewed' : 'delivered')}
        `}
      >
        <img src={this.props.userAvatar} />
        <div className="chat-content-message-body">
          <h4>{this.props.userName}</h4>
          <p>{this.props.date}</p>
          <div>
            {this.props.textMessage}
          </div>
        </div>

      </div>
    );
  }
}

export default ChatMessage;
