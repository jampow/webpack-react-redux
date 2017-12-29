import PropTypes from 'prop-types';
import React from 'react';
import UserForm from '../../components/users/UserForm';
import User from '../../components/users/User';

class Users extends React.Component {
  static propTypes = {
    list: PropTypes.array,
    form: PropTypes.object,
    componentWillMount: PropTypes.func,
    onSubmit: PropTypes.func,
    onClick: PropTypes.func,
    onInputChange: PropTypes.func,
    handleRemove: PropTypes.func,
    onRefreshList: PropTypes.func
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
      onInputChange,
      handleRemove,
      onRefreshList
    } = this.props;

    return (
      <div>
        <UserForm onInputChange={onInputChange} onSubmit={onSubmit} id={form.id} username={form.username} />
        {list.map(user => <User onClick={() => onClick(user.id, user.username)} handleRemove={e => handleRemove(e, user.id)} key={user.id} username={user.username} />)}
        <button onClick={onRefreshList}>Atualizar Lista</button>
      </div>
    );
  }
}

export default Users;
