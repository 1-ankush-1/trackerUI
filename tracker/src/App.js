import './App.css';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import Login from './Pages/AuthPages/Login';
import Profile from './Pages/Profile/Profile';
import UserContextProvider from './Store/userStore';


function App() {
  return (
    <>
      <Header />
      <UserContextProvider>
        <main>
          < Profile />
        </main>
      </UserContextProvider>
      <Footer />
    </>
  );
}

export default App;
