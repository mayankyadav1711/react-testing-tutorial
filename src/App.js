import './App.css';
import { useState } from 'react';
import UserForm from './components/UserForm'
import UserList from './components/UserList';
function App() {
  const [users,setUsers] = useState([]);
  const onUserAdd = (user) =>{
    setUsers([...users,user])
  }
  return (
   <>
<UserForm onUserAdd={onUserAdd}/>
<UserList users={users}/>
   </>
  );
}

export default App;
