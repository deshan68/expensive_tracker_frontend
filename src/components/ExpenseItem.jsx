// import React from 'react';
import PropTypes from 'prop-types'

const ExpenseItem = ({title,amount,date}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>{amount}</div>
      <div>{date.toISOString()}</div>
    </div>
  );
};
ExpenseItem.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};
export default ExpenseItem;
