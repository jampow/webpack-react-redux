import Login from '../../components/login';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/login';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const email = form.querySelector('[name=email]').value;
      const password = form.querySelector('[name=password]').value;
      dispatch(login(email, password));
    },
    logout: e => {
      e.preventDefault();
      dispatch(logout());
    }
  };
};

/*
const mapStateToProps = state => {
  return {};
};
*/

export default connect(
  () => ({}),
  mapDispatchToProps
)(Login);
