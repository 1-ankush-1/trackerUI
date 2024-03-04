import './App.css';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import SignUp from './Pages/AuthPages/SignUp';

function App() {
  return (
    <>
      <Header />
      <main>
        <SignUp />
      </main>
      <Footer />
    </>
  );
}

export default App;
