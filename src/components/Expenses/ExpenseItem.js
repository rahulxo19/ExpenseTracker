import { useState } from 'react'

import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

const [title, setTitle] = useState(props.title);
const [amount, setAmount] = useState(props.amount);

const clickHandler = () => {
  setTitle('Updated!');
  console.log(title);
}

const increment = () => {
  setAmount(amount + 100);
}
  
   return (
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__description'>{props.location}</div>
          <div className='expense-item__price'>${amount}</div>
        </div>
        <button onClick={increment}>+100$</button>
        <button onClick={clickHandler}>Change Title</button>
        <button>Delete</button>
      </Card>
    );
  }

  export default ExpenseItem;