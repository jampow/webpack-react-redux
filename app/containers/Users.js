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
    }
  };
};

const mapStateToProps = state => {
  return {
    list: state.users,
    form: {
      id: state.users.form.id,
      username: state.users.form.username
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
