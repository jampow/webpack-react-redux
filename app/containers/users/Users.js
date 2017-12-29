import { connect } from 'react-redux';
import { usersInputChange, selectUser, getUsers, saveUser, removeUser }  from '../../actions/users/actions.js';
import Users from '../../components/users/Users';

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id, username) => {
      dispatch(selectUser(id, username));
    },
    componentWillMount: () => {
      dispatch(getUsers());
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
      dispatch(saveUser({id, username}));
    },
    handleRemove: (e, id) => {
      e.preventDefault();
      dispatch(removeUser(id));
    },
    onRefreshList: e => {
      e.preventDefault();
      dispatch(getUsers());
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
