import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userStatus from './user';

export default combineReducers({
  routing: routerReducer,
  user: userStatus,
});
