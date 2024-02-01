import './App.css';
import User from './components/user/user';
import { useState } from 'react';
import AddUser from './components/newUser/addUser';

function App() {
  const [users, setUsers] = useState([]);

  const handleUserChange = (newUser) => {
    setUsers((prev) => {
      return [newUser, ...prev]
    })
  }

  return (
    <div className="App">
      <main>
        <AddUser onChangeUser={handleUserChange} />
        <User users={users} />
      </main>
    </div>
  );
}

export default App;
