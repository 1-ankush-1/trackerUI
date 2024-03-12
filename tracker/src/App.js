import './App.css';
import Router from './Routes/Router';
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './Store/authStore';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
