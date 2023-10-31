import React from "react";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>{amount}</div>
      <div>{date.toISOString()}</div>
    </div>
  );
};
export default ExpenseItem;
