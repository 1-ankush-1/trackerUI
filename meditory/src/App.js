import './App.css';
import Header from './components/layout/header/Header';
import AddMedicine from './components/addMedicine/AddMedicine';
import Medicines from './components/medicine/Medicines';
import CartContextProvider from './store/cartContext';
import MedicineContextProvider from './store/medicineContext';

function App() {
  return (
    <div className="App">
      <MedicineContextProvider>
        <CartContextProvider>
          <Header />
          <main className='main'>
            <AddMedicine />
            <Medicines />
          </main>
        </CartContextProvider>
      </MedicineContextProvider>
    </div>
  );
}

export default App;
