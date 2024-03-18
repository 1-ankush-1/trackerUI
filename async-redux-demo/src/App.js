import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import Notification from "./components/UI/Notification"
import { sendCartData } from './redux/actions/cart';

let initialRun = true;

function App() {
  const isHidden = useSelector(state => state.cartUI.isHidden);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.cartUI.notification);

  useEffect(() => {

    //do not call on initial call
    if (initialRun) {
      initialRun = false;
      return;
    }

    //setting data on every cart changes
    dispatch(sendCartData(cart));
  }, [cart])

  return (
    <>
      {notification && <Notification status={notification.status} message={notification.message} title={notification.title} />}
      <Layout>
        {isHidden && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
