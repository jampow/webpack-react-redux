import * as types from '../types';

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

// INPUTS
export function usersInputChange(field, value) {
  return {
    type: types.USERS_INPUT_CHANGE,
    field, value
  };
}

export function saveUser(user) {
  return {
    type: 'API/SAVE',
    endpoint: 'users',
    payload: user,
    success: result => ({
      type: 'SAVE_USERS_SUCCESS',
      users: result.data
    }),
    error: result => ({
      type: 'SAVE_USERS_FAIL',
      error: result
    })
  };
}

