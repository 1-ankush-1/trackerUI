import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';

function App() {
  const isHidden = useSelector(state => state.cartUI.isHidden);
  const cart = useSelector(state => state.cart);
  console.log(cart)

  useEffect(() => {
    console.log("called");
    fetch("https://async-react-add96-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
      headers: {
        "Content-Type": "application/json",
      },
    })
  }, [cart])

  return (
    <Layout>
      {isHidden && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
