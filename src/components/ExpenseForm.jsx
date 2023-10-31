import  { useState } from 'react';
import PropTypes from 'prop-types';

const ExpenseForm = ({onSaveExpenseData}) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

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

    onSaveExpenseData(expenseData)
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={titleChangeHandler} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
      </div>
      <div>
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2023-12-31" value={date} onChange={dateChangeHandler} />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};
ExpenseForm.propTypes = {
  onSaveExpenseData: PropTypes.func.isRequired,
};
export default ExpenseForm;
