import * as types from '../types';

export function selectUser(id, username) {
  return {
    type: types.SELECT_USER,
    id,
    username
  };
}

// INPUTS
export function usersInputChange(field, value) {
  return {
    type: types.USERS_INPUT_CHANGE,
    field, value
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

export function saveUser(user) {
  return {
    type: 'API/SAVE',
    endpoint: 'users',
    payload: user,
    success: result => ({
      type: 'SAVE_USER_SUCCESS',
      user: result.data
    }),
    error: result => ({
      type: 'SAVE_USER_FAIL',
      error: result
    })
  };
}

export function removeUser(id) {
  return {
    type: 'API/REMOVE',
    endpoint: 'users',
    payload: { id },
    success: result => ({
      type: 'REMOVE_USER_SUCCESS',
      result
    }),
    error: result => ({
      type: 'REMOVE_USER_FAIL',
      error: result
    })
  };
}

