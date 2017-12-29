import { connect } from 'react-redux';
import Header from '../../components/header';
import { logout, isLoggedIn } from '../../actions/login';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    isLoggedIn: () => dispatch(isLoggedIn())
  };
};

const mapStateToProps = state => {
  return {
    authenticated: state.login.authenticated
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
