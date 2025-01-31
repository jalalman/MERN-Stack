import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import UserForm from './UserForm'; // Ensure this path is correct
import './Home.css'; // Import custom CSS

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []); // Empty dependency array to run only once

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/users/delete/${id}`)
      .then(res => {
        console.log(res);
        setUsers(users.filter(user => user._id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h1>Home</h1>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            <span>{user.name}</span>
            <div>
              <Link to={`/users/${user._id}`} className="btn-primary">View</Link>
              <button onClick={() => handleDelete(user._id)} className="btn-secondary">Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between mt-4">
        <Link to="/UserForm" className="btn-primary">Add User</Link>
        <Link to="/about" className="btn-primary">About</Link>
      </div>
    </div>
  );
}

export default Home;