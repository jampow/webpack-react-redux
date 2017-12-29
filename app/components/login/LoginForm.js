import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default LoginForm;
