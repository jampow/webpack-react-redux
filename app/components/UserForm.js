import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    id: PropTypes.number,
    username: PropTypes.string
  };

  render() {
    const { onSubmit, id, username } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <input type="text" value={id} />
        <input type="text" value={username} />
        <button type="submit">Salvar</button>
      </form>
    );
  }
}

export default UserForm;
