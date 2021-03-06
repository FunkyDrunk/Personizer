import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import history from '../services/history';
import store from '../services/store';
import AppContainer from './appContainer';
import StartPageContainer from './startPageContainer';
import ReadmePage from '../components/readme';

// const history = syncHistoryWithStore(browserHistory, store);

class AppRoutContainer extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={ReadmePage} />
            <Route path="/main/" component={AppContainer} />
            <Route path="/start/" component={StartPageContainer} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default AppRoutContainer;
