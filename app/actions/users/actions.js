import * as types from '../types';
const axios = require('axios');
const endpoint = 'http://localhost:9091';

export function selectUser(id, username) {
  return {
    type: types.SELECT_USER,
    id,
    username
  };
}

export function getUsers() {
  return {
    type: 'API/GET',
    endpoint: 'users',
    success: result => ({
      type: 'FETCH_USERS_SUCCESS',
      users: result.data
    }),
    error: result => ({
      type: 'FETCH_USERS_FAIL',
      error: result
    })
  };
}

// FETCH_USERS
export function fetchUsers() {
  return {
    type: types.FETCH_USERS_REQUEST
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

// UPDATE_USER
export function requestUpdateUser(id, username) {
  return {
    type: types.UPDATE_USER_REQUEST,
    id,
    username
  };
}

export function updateUserSuccess(json) {
  return {
    type: types.UPDATE_USER_SUCCESS,
    user: json
  };
}

export function updateUserFail(json) {
  return {
    type: types.UPDATE_USER_FAIL,
    error: json
  };
}

// INPUTS
export function usersInputChange(field, value) {
  return {
    type: types.USERS_INPUT_CHANGE,
    field, value
  };
}

export function requestUsers() {
  return dispatch => {
    dispatch(fetchUsers());
    return axios.get(`${endpoint}/users`)
      .then(response => dispatch(fetchUsersSuccess(response.data)))
      .catch(response => dispatch(fetchUsersFail(response.data)));
  };
}

export function updateUser(user) {
  return dispatch => {
    dispatch(requestUpdateUser(user.username));
    const { username } = user;
    const payload = { username };
    return axios.put(`${endpoint}/users/${user.id}`, payload )
      .then(response => dispatch(updateUserSuccess(response.data)))
      .catch(response => dispatch(updateUserFail(response.data)));
  };
}

