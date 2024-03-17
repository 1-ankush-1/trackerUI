import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../../redux/slices/cart';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();

  const handleAddItemsInCart = () => {
    const id = Math.random().toString(36).substr(2, 9);
    dispatch(cartAction.add({ id: id, title: title, price: price, description: description }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItemsInCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
