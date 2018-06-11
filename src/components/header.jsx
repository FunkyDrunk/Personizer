import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';

class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <h2>PersonIzer</h2>
        </div>
        <div className="header-userinfo">
          <Link to="/" className="header-link">Sign in</Link>
          <Link to="/" className="header-link">Sign up</Link>
        </div>
      </div>
    );
  }
}

export default Header;
