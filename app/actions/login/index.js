import * as types from '../types';

const endpoint = 'auth';

export function login(email, password) {
  return {
    type: 'API/SAVE',
    endpoint,
    payload: {
      email,
      password
    },
    success: result => ({
      type: types.LOGIN_SUCCESS,
      auth: result.data
    })
  };
}

export function isLoggedIn() {
  return { type: types.IS_LOGGED_IN };
}

export function logout() {
  return { type: types.LOGOUT };
}
