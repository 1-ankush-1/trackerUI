import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { cartUIAction } from './redux/slices/cartUI';
import Notification from "./components/UI/Notification"

let initialRun = true;

function App() {
  const isHidden = useSelector(state => state.cartUI.isHidden);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.cartUI.notification);

  useEffect(() => {
    const setDataInCart = async () => {
      try {
        //setting notification
        dispatch(cartUIAction.showNotification({
          status: "pending",
          title: "sending..",
          message: "Sending cart data"
        }))
        
        const response = await fetch("https://async-react-add96-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json", {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (!response.ok) {
          throw new Error("setting cart data failed ")
        }

        dispatch(cartUIAction.showNotification({
          status: "success",
          title: "Success",
          message: "Set cart data successfully "
        }))
      } catch (error) {
        dispatch(cartUIAction.showNotification({
          status: "error",
          title: "Error",
          message: "setting cart data failed "
        }))
      }
    }

    //do not call on initial call
    if (initialRun) {
      initialRun = false;
      return;
    }

    //setting data on every cart changes
    setDataInCart();
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
