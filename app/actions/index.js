import * as types from './types';
import * as users from './users/actions';

export function filterTable(filter) {
  return {
    type: types.FILTER,
    filter
  };
}

export default users;
