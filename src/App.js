import './App.css';

import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      location: 'abc',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, location: 'abc', date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      location: 'abc',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      location: 'abc',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  
  return (
    <div>
      <h2>Let's get started!</h2>

          <Expenses items={expenses}></Expenses>


    </div>
  );
}

export default App;
