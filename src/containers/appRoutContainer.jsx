import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContainer from './appContainer';

class AppRoutContainer extends PureComponent {
  render() {
    return (
      <Router>
        <Route path="/" component={AppContainer} />
      </Router>
    );
  }
}

export default AppRoutContainer;
