import './App.css';
import Expenses from './components/expenses/Expenses';

const expenses = [{ name: "Food", price: 400, LocationOfExpenditure: "movie", date: new Date() },
{ name: "Petrol", price: 200, LocationOfExpenditure: "movie", date: new Date() },
{ name: "Movies", price: 600, LocationOfExpenditure: "movie", date: new Date() }]

function App() {
  return (
    <div className="App">
      <h1>Expense Items</h1>
      <main >
        <Expenses expenses={expenses} />
      </main>
    </div>
  );
}

export default App;
