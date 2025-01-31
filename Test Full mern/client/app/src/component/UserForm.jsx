import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';
import './UserForm.css'; // Import custom CSS

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    axios.post('http://localhost:8000/api/users/new', newUser)
      .then(res => {
        console.log(res);
        setRedirect(true);
      })
      .catch(err => {
        if (err.response && err.response.data.errors) {
          setErrors(err.response.data.errors);
        } else {
          console.error(err);
        }
      });
    console.log("Welcome", newUser);
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {errors.name && <div className="text-danger">{errors.name.message}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {errors.email && <div className="text-danger">{errors.email.message}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {errors.password && <div className="text-danger">{errors.password.message}</div>}
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-secondary">Back</Link>
        </div>
      </form>
    </div>
  );
}

export default UserForm;