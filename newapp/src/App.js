import React, { useState } from 'react';

import NewExpense from "./components/NewExpenses/NewExpense";

import Expenses from "./components/Expenses/Expenses";

let DUMMY_EXPENSE = [
  {
    id:'e1',
    title:'school fee',
    amount:280,
    date:new Date(2023,8,26)
  },
  {
    id:'e2',
    title:'House Rent',
    amount:600,
    date:new Date(2024,3,11)
  },
  {
    id:'e3',
    title:'Food',
    amount:540,
    date:new Date(2024,8,22)
  },
  {
    id:'e4',
    title:'Hostel fee',
    amount:5540,
    date:new Date(2024,3,12)
  }

];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  // fetch('mongodb://localhost:27017/e-comm.product')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then(
  //     data => {
  //     setExpenses(data);
  //   }
  //   );
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
