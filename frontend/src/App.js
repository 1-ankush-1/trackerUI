import './App.css';
import ExpenseItem from './components/ExpenseItem';

const expenses = [{ name: "Food", price: 100, LocationOfExpenditure: "movie" },
{ name: "Petrol", price: 100, LocationOfExpenditure: "movie" },
{ name: "Movies", price: 100, LocationOfExpenditure: "movie" }]

function App() {
  return (
    <div className="App">
      <main>
        <ExpenseItem expenses={expenses} />
      </main>
    </div>
  );
}

export default App;
