import { connect } from 'react-redux';
import { selectUser, requestUsers }  from '../actions/users/actions.js';
import Users from '../components/Users';

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id, username) => {
      dispatch(selectUser(id, username));
    },
    componentWillMount: () => {
      dispatch(requestUsers());
    },
    onSubmit: () => {}
  };
};

const mapStateToProps = state => {
  console.log('state -> ', state);
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
