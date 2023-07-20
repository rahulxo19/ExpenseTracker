import './ExpenseDate.css';

const ExpenseDate = (props) => {
  if(props.date){

    var month = props.date.toLocaleString('en-US', { month: 'long' });
    var day = props.date.toLocaleString('en-US', { day: '2-digit' });
    var year = props.date.getFullYear();
  }

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;