import './App.css';
import Header from './components/layout/header/Header';
import AddMedicine from './components/addMedicine/AddMedicine';
import Medicine from './components/medicine/Medicine';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AddMedicine />
        <Medicine />
      </main>
    </div>
  );
}

export default App;
