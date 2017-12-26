import * as users from './actions';

test('fetchUsers', () => {
  const expectedAction = {
    type: 'FETCH_USERS_REQUEST'
  };

  expect(users.fetchUsers()).toEqual(expectedAction);
});

