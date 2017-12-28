import { connect } from 'react-redux';
import { usersInputChange, selectUser, requestUsers, updateUser }  from '../actions/users/actions.js';
import Users from '../components/Users';

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id, username) => {
      dispatch(selectUser(id, username));
    },
    componentWillMount: () => {
      dispatch(requestUsers());
    },
    onInputChange: e => {
      const t = e.target;
      const field = t.getAttribute('name');
      const value = t.value;
      dispatch(usersInputChange(field, value));
    },
    onSubmit: e => {
      e.preventDefault();
      const t = e.target;
      const id = t.querySelector('[name=id]').value;
      const username = t.querySelector('[name=username]').value;
      dispatch(updateUser({id, username}));
    },
    onRefreshList: e => {
      e.preventDefault();
      dispatch({
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
      });
    }
  };
};

const mapStateToProps = state => {
  const ret = {
    list: [...state.users.items],
    form: {
      id: state.users.form.id,
      username: state.users.form.username
    }
  };
  return ret;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
