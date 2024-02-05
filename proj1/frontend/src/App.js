import './App.css';
import CreateOrder from './components/createOrder/CreateOrder';
import ShowOrder from './components/showOrder/ShowOrder';
import OrderProviderContext from './store/order';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurant App</h1>
      </header>
      <OrderProviderContext>
        <main>
          <CreateOrder />
          <ShowOrder />
        </main>
      </OrderProviderContext>
    </div>
  );
}

export default App;
