import './App.css';

import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      date: '2023-07-01',
      title: 'Groceries',
      location: 'Supermarket XYZ',
      amount: 50.75,
    },
    {
      date: '2023-07-02',
      title: 'Eating Out',
      location: 'Restaurant ABC',
      amount: 30.99,
    },
    {
      date: '2023-07-03',
      title: 'Clothing',
      location: 'Fashion Store DEF',
      amount: 80.50,
    },
    {
      date: '2023-07-04',
      title: 'Gasoline',
      location: 'Gas Station GHI',
      amount: 45.25,
    },
    {
      date: '2023-07-05',
      title: 'Entertainment',
      location: 'Movie Theater JKL',
      amount: 25.50,
    },
  ];
  
  return (
    <div>
      <h2>Let's get started!</h2>

        { expenses.map((value, index) => 
          <ExpenseItem date={value.date} title={value.title} location={value.location} amount={value.amount}></ExpenseItem>
        )}

    </div>
  );
}

export default App;
