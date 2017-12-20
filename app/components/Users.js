import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }

  render() {
    return (
      <div>{this.state.name}</div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string
};

export default User;
