import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { header } from '../../styles/header.scss';

class Header extends React.Component {
  static propTypes = {
    authenticated: PropTypes.boolean,
    isLoggedIn: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.isLoggedIn();
  }

  render() {
    const { logout, authenticated } = this.props;

    return (
      <header className={header}>
        <Link to="/">Users</Link>
        { authenticated && <span onClick={logout} >Logout</span> }
        { !authenticated && <Link to="/login">Login</Link> }
      </header>
    );
  }
}

export default Header;
