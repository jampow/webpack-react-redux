import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetch } from '../actions';
import Users from '../components/Users';
import { users } from '../styles/users.scss';

const Users = ({ list }) => {
  let input;

  return (
    <div className={filterableTable}>
      <input
        value={filter}
        ref={node => {input = node;}}
        onChange={() => onFilter(input.value)} />

      <ProductTable filter={filter} />
    </div>
  );
};

FilterableTable.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: filterText => dispatch(filterTable(filterText))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterableTable);
