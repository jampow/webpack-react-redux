import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { requestUsers } from '../actions';
import User from '../components/Users';
import UserForm from '../components/UserForm';
import { users } from '../styles/users.scss';

class Users extends React.Component {
  static propTypes = {
    list: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.dispatch(requestUsers());
  }

  render() {
    return (
      <div className={users}>
        <UserForm />
        {this.props.list.items.map(user => <User key={user.id} name={user.username} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.users
  };
};

export default connect(
  mapStateToProps
)(Users);
