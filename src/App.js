import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './services/store';
import AppRoutContainer from './containers/appRoutContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoutContainer />
      </Provider>
    );
  }
}

export default App;
