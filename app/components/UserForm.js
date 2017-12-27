import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    onInputChange: PropTypes.func,
    id: PropTypes.number,
    username: PropTypes.string
  };

  onInputChange(field, e) {
    console.log(field, e);
    const username = {[field]: e.target.value};
    this.setState(username);
  }

  render() {
    const { id, username, onSubmit } = this.props;

    return (
      <form onSubmit={e => onSubmit(e, id, username)}>
        <input type="text" ref="id" value={id} onChange={this.onInputChange.bind(this, 'id')} />
        <input type="text" ref="username" value={username} onChange={this.onInputChange.bind(this, 'username')} />
        <button type="submit">Salvar</button>
      </form>
    );
  }
}

export default UserForm;
