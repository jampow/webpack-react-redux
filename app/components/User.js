import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick}>{this.props.username}</div>
    );
  }
}

User.propTypes = {
  username: PropTypes.string,
  onClick: PropTypes.func
};

export default User;
