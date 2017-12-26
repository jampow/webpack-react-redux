import { connect } from 'react-redux';
import { selectUser, requestUsers }  from '../actions/users/actions.js';
import Users from '../components/Users';

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id, name) => {
      dispatch(selectUser(id, name));
    },
    componentWillMount: () => {
      dispatch(requestUsers());
    },
    onSubmit: () => {}
  };
};

const mapStateToProps = state => {
  console.log(state);
  return {
    list: state.users,
    form: {
      id: state.id,
      name: state.name
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
