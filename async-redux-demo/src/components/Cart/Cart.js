import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalPrice);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length > 0 &&
        <>
          <ul>
            {cartItems.map((item, i) => {
              return <CartItem
                key={i}
                item={item}
              />
            })}
          </ul>
          <h2>totalAmount : {totalAmount}</h2>
        </>
      }
      {cartItems.length === 0 && <h2>no items in cart ...</h2>}
    </Card>
  );
};

export default Cart;
