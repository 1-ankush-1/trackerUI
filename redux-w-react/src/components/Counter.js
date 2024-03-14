import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
const Counter = () => {
  //to get particular store slice state data
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {

  };

  const incrementCounterHandler = () => {
    dispatch({ type: "INCREMENTBY2" })
  }
  const decrementCounterHandler = () => {
    dispatch({ type: "DECREMENTBY2" })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementCounterHandler}>INCREMENT</button>
        <button onClick={decrementCounterHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main >
  );
};

export default Counter;
