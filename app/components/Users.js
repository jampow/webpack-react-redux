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
    onSubmit: PropTypes.func,
    onClick: PropTypes.func,
    onInputChange: PropTypes.func
  };

  componentWillMount() {
    this.props.componentWillMount();
  }

  render() {
    const {
      onSubmit,
      form,
      list,
      onClick,
      onInputChange
    } = this.props;

    return (
      <div className={users}>
        <UserForm onInputChange={onInputChange} onSubmit={onSubmit} id={form.id} username={form.username} />
        {list.items.map(user => <User onClick={() => onClick(user.id, user.username)} key={user.id} name={user.username} />)}
      </div>
    );
  }
}

export default Users;
