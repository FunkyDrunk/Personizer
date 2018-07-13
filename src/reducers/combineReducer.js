import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userStatus from './user';
import profile from './profile';
import usersList from './userList';
import chat from './chat';
import conference from './conference';

export default combineReducers({
  routing: routerReducer,
  user: userStatus,
  profile,
  usersList,
  chat,
  conference,
});
