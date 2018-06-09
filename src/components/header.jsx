import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <h2>PersonIzer</h2>
        </div>
        <div className="header-userinfo">
          <button>reg</button>
        </div>
      </div>
    );
  }
}

export default Header;
