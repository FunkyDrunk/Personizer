import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userStatus from './user/userStatus';

export default combineReducers({
  router: routerReducer,
  user: userStatus,
});
