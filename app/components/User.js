import React from 'react';
import PropTypes from 'prop-types';
import { btn } from '../styles/user.scss';

class User extends React.Component {
  static propTypes() {
    return {
      username: PropTypes.string,
      onClick: PropTypes.func,
      removeUser: PropTypes.func
    };
  }

  render() {
    const { onClick, username, removeUser } = this.props;
    return (
      <li>
        <span onClick={onClick}>{username}</span>
        <button className={btn} onClick={removeUser}>remove</button>
      </li>
    );
  }
}

export default User;
