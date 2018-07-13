import React, { Component } from 'react';

class ChatForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} onClick={this.props.vievMessages} className="chat-footer">
        <textarea value={this.props.messageText} onChange={this.props.handleChange} type="textarea" />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default ChatForm;
