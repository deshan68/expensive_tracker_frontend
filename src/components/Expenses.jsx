import  { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    setExpenses((prevExpenses) => {
      return [enteredExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
