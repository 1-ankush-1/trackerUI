import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartUIAction } from '../../redux/slices/cartUI';

const CartButton = (props) => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const handleCartVisibility = () => {
    dispatch(cartUIAction.toggle());
  }
  return (
    <button className={classes.button} onClick={handleCartVisibility}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
