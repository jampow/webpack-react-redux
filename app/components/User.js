import React from 'react';
import PropTypes from 'prop-types';
import { btn } from '../styles/user.scss';

class User extends React.Component {
  static propTypes() {
    return {
      username: PropTypes.string,
      onClick: PropTypes.func,
      handleRemove: PropTypes.func
    };
  }

  render() {
    const { onClick, username, handleRemove } = this.props;
    return (
      <li>
        <span onClick={onClick}>{username}</span>
        <button className={btn} onClick={handleRemove}>remove</button>
      </li>
    );
  }
}

export default User;
