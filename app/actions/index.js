import * as types from './types';
const axios = require('axios');

export function filterTable(filter) {
  return {
    type: types.FILTER,
    filter
  };
}

export function fetchUsers() {
  return {
    type: types.FETCH_USERS
  };
}

export function fetchUsersSuccess(json) {
  return {
    type: types.FETCH_USERS_SUCCESS,
    users: json
  };
}

export function fetchUsersFail(json) {
  return {
    type: types.FETCH_USERS_FAIL,
    error: json
  };
}

export function fetch() {
  return dispatch => {
    dispatch(fetchUsers());
    return axios.get('http://localhost:4000/users')
      .then(response => dispatch(fetchUsersSuccess(response.data)))
      .catch(response => dispatch(fetchUsersFail(response.data)));
  };
}
