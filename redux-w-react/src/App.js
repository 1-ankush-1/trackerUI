import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';


function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {!isAuthenticated && <Auth />}
      {isAuthenticated &&
        <>
          <Header />
          <Counter />
        </>}
    </>
  );
}

export default App;
