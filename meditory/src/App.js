import './App.css';
import Header from './components/layout/header/Header';
import AddMedicine from './components/addMedicine/AddMedicine';
import MedicineContexProvider from './store/medicineContext';
import Medicines from './components/medicine/Medicines';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <MedicineContexProvider>
          <AddMedicine />
          <Medicines />
        </MedicineContexProvider>
      </main>
    </div>
  );
}

export default App;
