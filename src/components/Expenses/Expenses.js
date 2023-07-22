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

  const filteredExpenses = props.items.filter(items => {
    return filteredYear === 'None' || items.date.getFullYear().toString() ===  filteredYear;
  })

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
      />
        {filteredExpenses.length === 0 ? (
          <p>No expenses found for the selected year.</p>
        ) : (
          filteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              location={item.location}
              amount={item.amount}
              date={item.date}
            />
          ))
        )}
    </Card>
    </div>
  );
}

export default Expenses;