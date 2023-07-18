import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      { props.items.map((value, index) => {
         return <ExpenseItem title={value.title} location={value.location} amount={value.amount} date={value.date} />
      })}
    </Card>
  );
}

export default Expenses;