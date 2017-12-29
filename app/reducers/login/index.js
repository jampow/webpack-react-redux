import * as types from '../../actions/types.js';

const login = (
  state = {
    isFetching: false,
    didInvalidate: false,
    authenticated: false
  },
  action) => {
  switch (action.type) {
    case types.IS_LOGGED_IN:
      const token = localStorage.getItem('token');
      return {
        ...state,
        authenticated: !!token
      };

    case types.LOGIN_SUCCESS:
      localStorage.setItem('token', action.auth.token);
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        authenticated: true
      };

    case types.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        authenticated: false
      };

    default:
      return state;
  }
};

export default login;
