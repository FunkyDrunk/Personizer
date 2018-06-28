import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userStatus from './user';
import profile from './profile';
import users from './users';

export default combineReducers({
  routing: routerReducer,
  user: userStatus,
  profile,
  users,
});
