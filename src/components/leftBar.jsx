import React, { Component } from 'react';

import '../styles/leftBar.css';

class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar">
      <h3>Users </h3>
        <div> <input /> </div>
        <div className="left-bar-card">
          <img width="50" heigth="50" src="https://randomuser.me/api/portraits/men/3.jpg" />
          <p>Full stack trainee</p>
        </div>
        <div className="left-bar-card">
          <img width="50" heigth="50" src="https://randomuser.me/api/portraits/men/3.jpg" />
          <p>Full stack trainee</p>
        </div>
        <div className="left-bar-card">
          <img width="50" heigth="50" src="https://randomuser.me/api/portraits/men/3.jpg" />
          <p>Full stack trainee</p>
        </div>
        <div className="left-bar-card">
          <img width="50" heigth="50" src="https://randomuser.me/api/portraits/men/3.jpg" />
          <p>Full stack trainee</p>
        </div>
        <div className="left-bar-card">
          <img width="50" heigth="50" src="https://randomuser.me/api/portraits/men/3.jpg" />
          <p>Full stack trainee</p>
        </div>
        <div className="left-bar-card">
          <img width="50" heigth="50" src="https://randomuser.me/api/portraits/men/3.jpg" />
          <p>Full stack trainee</p>
        </div>
        <div className="left-bar-card">
          <img width="50" heigth="50" src="https://randomuser.me/api/portraits/men/3.jpg" />
          <p>Full stack trainee</p>
        </div>
      </div>
    );
  }
}

export default LeftBar;
