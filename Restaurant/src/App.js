import Header from "./Components/Layout/Header"
import Meals from "./Components/Meals/Meals";
import CartContextProvider from "./store/cartContext";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
