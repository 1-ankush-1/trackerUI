import './App.css';
import CreateOrder from './components/createOrder/CreateOrder';
import ShowOrder from './components/showOrder/ShowOrder';
import OrderProviderContext from './store/order';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurant Manager</h1>
      </header>
      <main>
        <OrderProviderContext>
          <CreateOrder />
          <ShowOrder />
        </OrderProviderContext>
      </main>
    </div>
  );
}

export default App;
