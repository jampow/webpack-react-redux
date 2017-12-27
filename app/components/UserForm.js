import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    onInputChange: PropTypes.func,
    id: PropTypes.number,
    username: PropTypes.string
  };

  render() {
    const { id, username, onSubmit, onInputChange } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <input type="text" name="id" value={id} onChange={onInputChange} />
        <input type="text" name="username" value={username} onChange={onInputChange} />
        <button type="submit">Salvar</button>
      </form>
    );
  }
}

export default UserForm;
