import { useState } from 'react';
import './App.css';
import AddExpense from './components/NewExpense/AddExpense';
import Expenses from './components/expenses/Expenses';

const expenses = [{ id: "001", name: "Food", price: 400, LocationOfExpenditure: "movie", date: new Date() },
{ id: "2100", name: "Petrol", price: 200, LocationOfExpenditure: "movie", date: new Date() },
{ id: "022", name: "Movies", price: 600, LocationOfExpenditure: "movie", date: new Date() }]

function App() {
  const [allExpense, SetAllExpense] = useState(expenses);

  return (
    <div className="App">
      <h1>Expense Items</h1>
      <main >
        <AddExpense SetAllExpense={SetAllExpense} />
        <Expenses expenses={allExpense} />
      </main>
    </div>
  );
}

export default App;
