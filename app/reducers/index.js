import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import users from './users';
import login from './login';

const rootReducer = combineReducers({
  users,
  login,
  routing
});

export default rootReducer;
