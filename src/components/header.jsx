import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';

class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <Link to="/start" className="header-link"><h2>PersonIzer</h2></Link>
        </div>
        <div className="header-userinfo">
          <span>Jim Chambers</span>
          <Link to="/" className="header-link">Edit profile</Link>
        </div>
      </div>
    );
  }
}

export default Header;
