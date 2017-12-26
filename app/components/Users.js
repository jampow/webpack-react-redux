import PropTypes from 'prop-types';
import React from 'react';
import UserForm from '../components/UserForm';
import User from '../components/User';
import { users } from '../styles/users.scss';

class Users extends React.Component {
  static propTypes = {
    list: PropTypes.object,
    form: PropTypes.object,
    componentWillMount: PropTypes.func,
    onSubmit: PropTypes.func
  };

  componentWillMount() {
    this.props.componentWillMount();
  }

  render() {
    return (
      <div className={users}>
        <UserForm onSubmit={this.props.onSubmit} id={this.props.form.id} name={this.props.form.name} />
        {this.props.list.items.map(user => <User key={user.id} name={user.username} />)}
      </div>
    );
  }
}

export default Users;
