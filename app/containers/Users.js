import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetch } from '../actions';
import User from '../components/Users';
import { users } from '../styles/users.scss';

const Users = ({ list }) => (
  <div className={users}>
    {list.items.map(user => <User key={user.id} name={user.name} />)}
  </div>
);

Users.propTypes = {
  list: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    list: state.users
  };
};

export default connect(
  mapStateToProps
)(Users);
