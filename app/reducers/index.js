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
      id: '',
      username: ''
    }
  },
  action) => {
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

    case types.SAVE_USER_SUCCESS:
      const { user } = action;

      const isNew = state.items.map(u => u.id).indexOf(user.id) === -1;

      const items = isNew
        ? [...state.items, user]
        : state.items.map(u => {
          console.log(`u.id: ${u} | user.id: ${user.id}`);

          if(u.id === user.id) {
            return user;
          }
          return u;
        });

      return {
        ...state,
        form: {
          id: '',
          username: ''
        },
        items
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
