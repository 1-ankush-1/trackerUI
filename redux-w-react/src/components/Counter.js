import classes from './Counter.module.css';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
const Counter = () => {
  //to get particular store slice state data
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
