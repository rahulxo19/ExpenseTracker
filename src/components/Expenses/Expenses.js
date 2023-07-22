import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('None');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return filteredYear==='None' || expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }  

  if(filteredExpenses.length === 1){
    var singleexpense = (<div>only single expense. Add more... </div>)
  }

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
      />
        {expensesContent}
    { singleexpense}
    </Card>
    </div>
  );
}

export default Expenses;