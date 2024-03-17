import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartAction } from '../../redux/slices/cart';

const CartItem = (props) => {
  const dispatch = useDispatch()
  const { id, title, quantity, total, price } = props.item;
  const handleIncrementItemQuantity = () => {
    dispatch(cartAction.add({ quantity: quantity + 1, id, price }));
  }
  const handleDecrementItemQuantity = () => {
    dispatch(cartAction.remove(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${quantity * price.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrementItemQuantity}>-</button>
          <button onClick={handleIncrementItemQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
