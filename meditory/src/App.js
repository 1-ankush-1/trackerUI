import './App.css';
import Header from './components/layout/header/Header';
import AddMedicine from './components/addMedicine/AddMedicine';
import MedicineContexProvider from './store/medicineContext';
import Medicines from './components/medicine/Medicines';
import CartContextProvider from './store/cartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Header />
        <main className='main'>
          <MedicineContexProvider>
            <AddMedicine />
            <Medicines />
          </MedicineContexProvider>
        </main>
      </CartContextProvider>
    </div>
  );
}

export default App;
