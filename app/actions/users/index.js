import * as types from '../types';

const endpoint = 'users';

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
    endpoint,
    success: result => ({
      type: types.GET_USERS_SUCCESS,
      users: result.data
    }),
    error: result => ({
      type: types.GET_USERS_FAIL,
      error: result
    })
  };
}

export function saveUser(user) {
  return {
    type: 'API/SAVE',
    endpoint,
    payload: user,
    success: result => ({
      type: types.SAVE_USER_SUCCESS,
      user: result.data
    }),
    error: result => ({
      type: types.SAVE_USER_FAIL,
      error: result
    })
  };
}

export function removeUser(id) {
  return {
    type: 'API/REMOVE',
    endpoint,
    payload: { id },
    success: result => ({
      type: types.REMOVE_USER_SUCCESS,
      id,
      result
    }),
    error: result => ({
      type: types.REMOVE_USER_FAIL,
      error: result
    })
  };
}

