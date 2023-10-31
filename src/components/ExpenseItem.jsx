<<<<<<< HEAD
// import React from 'react';
import PropTypes from 'prop-types'

const ExpenseItem = ({title,amount,date}) => {
=======
import React from "react";

const ExpenseItem = ({ title, amount, date }) => {
>>>>>>> 0941f773300b33b6a6e807e744822a1edc29444f
  return (
    <div>
      <h2>{title}</h2>
      <div>{amount}</div>
      <div>{date.toISOString()}</div>
    </div>
  );
};
<<<<<<< HEAD
ExpenseItem.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};
=======

>>>>>>> 0941f773300b33b6a6e807e744822a1edc29444f
export default ExpenseItem;
