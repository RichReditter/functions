import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState([])


  function loadUser() {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then(result => setUsers(result.data))
  }
  useEffect(() => {
    loadUser()
  }, [page])

  return (
    <React.Fragment>
      <ul>
        {
          users.map(user =>
            <li key={user.id}><div>Имя: {user.first_name}<br></br>{user.email}</div></li>
          )
        }
      </ul>
      <button onClick={() =>
        setPage(page - 1)
      }>Предыдущая страница</button>
      <button onClick={() =>
        setPage(page + 1)
      }>Следующая страница</button>
    </React.Fragment>
  )
}

export default App;
