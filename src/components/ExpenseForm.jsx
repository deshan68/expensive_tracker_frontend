<<<<<<< HEAD
import  { useState } from 'react';
import PropTypes from 'prop-types';

const ExpenseForm = ({onSaveExpenseData}) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
=======
import React, { useState } from "react";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
>>>>>>> 0941f773300b33b6a6e807e744822a1edc29444f

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

<<<<<<< HEAD
    onSaveExpenseData(expenseData)
    setTitle('');
    setAmount('');
    setDate('');
=======
    onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
>>>>>>> 0941f773300b33b6a6e807e744822a1edc29444f
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={titleChangeHandler} />
      </div>
      <div>
        <label>Amount</label>
<<<<<<< HEAD
        <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
      </div>
      <div>
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2023-12-31" value={date} onChange={dateChangeHandler} />
=======
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={amountChangeHandler}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2023-12-31"
          value={date}
          onChange={dateChangeHandler}
        />
>>>>>>> 0941f773300b33b6a6e807e744822a1edc29444f
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};
<<<<<<< HEAD
ExpenseForm.propTypes = {
  onSaveExpenseData: PropTypes.func.isRequired,
};
=======

>>>>>>> 0941f773300b33b6a6e807e744822a1edc29444f
export default ExpenseForm;
