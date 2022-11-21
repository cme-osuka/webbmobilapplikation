import { useEffect } from 'react'
import './App.css'
import { getData } from "./api/getData";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

function App() {
  useEffect(() => {
    async function getUsers() {
      const users = await getData<User[]>("https://jsonplaceholder.typicode.com/users");
      console.log(users);
    }
    getUsers();
  }, [])

  return (
    <div className="App">

    </div>
  )
}

export default App
