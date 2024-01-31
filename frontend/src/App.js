import './App.css';
import ExpenseItem from './components/expenses/ExpenseItem';

const expenses = [{ name: "Food", price: 100, LocationOfExpenditure: "movie", date: new Date() },
{ name: "Petrol", price: 100, LocationOfExpenditure: "movie", date: new Date() },
{ name: "Movies", price: 100, LocationOfExpenditure: "movie", date: new Date() }]

function App() {
  return (
    <div className="App">
      <h1>Expense Items</h1>
      <main >
        <ExpenseItem expenses={expenses} />
      </main>
    </div>
  );
}

export default App;
