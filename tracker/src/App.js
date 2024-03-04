import './App.css';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import Login from './Pages/AuthPages/Login';


function App() {
  return (
    <>
      <Header />
      <main>
        <Login />
      </main>
      <Footer />
    </>
  );
}

export default App;
