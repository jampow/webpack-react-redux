import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import User from '../components/Users';
import { users } from '../styles/users.scss';

class Users extends React.Component {
  static propTypes = {
    list: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    return (
      <div className={users}>
        {this.props.list.items.map(user => <User key={user.id} name={user.name} />)}
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
