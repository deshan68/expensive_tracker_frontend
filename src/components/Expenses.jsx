<<<<<<< HEAD
import  { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm';
=======
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "./ExpenseItem";
>>>>>>> 0941f773300b33b6a6e807e744822a1edc29444f

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    setExpenses((prevExpenses) => {
<<<<<<< HEAD
     return  [enteredExpenseData, ...prevExpenses];
=======
      return [enteredExpenseData, ...prevExpenses];
>>>>>>> 0941f773300b33b6a6e807e744822a1edc29444f
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
