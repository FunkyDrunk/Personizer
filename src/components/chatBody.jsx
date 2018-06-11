import React, { Component } from 'react';
import '../styles/chatBody.css';

class ChatBody extends Component {
  render() {
    return (
      <div className="chat-body">
        <div className="chat-header">
          <h3>Bacand team 'Cucumber'</h3>
        </div>
        <div className="chat-content">
          <div className="chat-content-message">
            <img src="https://randomuser.me/api/portraits/women/60.jpg" />
            <div className="chat-content-message-body">
              <h4>Anna</h4>
              <p>08:30 05.10.2021</p>
              <div>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
          </div>
          <div className="chat-content-message message-right">
            <img src="https://randomuser.me/api/portraits/men/16.jpg" />
            <div className="chat-content-message-body">
              <h4>Boris</h4>
              <p>09:30 05.10.2021</p>
              <div>
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
          </div>
          <div className="chat-content-message message-right">
            <img src="https://randomuser.me/api/portraits/men/16.jpg" />
            <div className="chat-content-message-body">
              <h4>Boris</h4>
              <p>09:30 05.10.2021</p>
              <div>
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
          </div>
          <div className="chat-content-message">
            <img src="https://randomuser.me/api/portraits/women/60.jpg" />
            <div className="chat-content-message-body">
              <h4>Anna</h4>
              <p>08:30 05.10.2021</p>
              <div>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
          </div>
          <div className="chat-content-message message-right">
            <img src="https://randomuser.me/api/portraits/men/16.jpg" />
            <div className="chat-content-message-body">
              <h4>Boris</h4>
              <p>09:30 05.10.2021</p>
              <div>
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
          </div>
          <div className="chat-content-message">
            <img src="https://randomuser.me/api/portraits/women/60.jpg" />
            <div className="chat-content-message-body">
              <h4>Anna</h4>
              <p>09:30 05.10.2021</p>
              <div>
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
          </div>
        </div>
        <div className='chat-footer'>
          <textarea type='textarea' />
          <button>submit</button>
        </div>
      </div>
    );
  }
}

export default ChatBody;
