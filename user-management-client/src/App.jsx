
import { useEffect, useState } from 'react'
import './App.css'
import Users from './components/Users'

function App() {
  
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <>
      <h1>USer management system</h1>
      <Users users={users} />
    </>
  )
}

export default App
