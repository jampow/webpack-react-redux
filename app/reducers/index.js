import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
  switch (action.type) {
    case types.FILTER:
      return action.filter;
    default:
      return state;
  }
};

const users = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    form: {
      id: 0,
      username: ''
    }
  },
  action) => {
  console.log('action: ', action);
  switch (action.type) {
    case types.SELECT_USER:
      return {
        ...state,
        form: {
          id: action.id,
          username: action.username
        }
      };
    case types.USERS_INPUT_CHANGE:
      const form = {
        ...state.form,
        [action.field]: action.value
      };

      return {
        ...state,
        form
      };
    case types.FETCH_USERS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };

    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: [...action.users]
      };

    case types.FETCH_USERS_FAIL:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      };

    default:
      return state;
  }
};


const rootReducer = combineReducers({
  filter,
  users,
  routing
});

export default rootReducer;
