import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './UserForm.css'; // Import custom CSS

function UserForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    axios.post('http://localhost:8000/api/users/new', newUser)
      .then(res => {
        navigate("/");
      })
      .catch(err => {
        const errorResponse = err.response?.data?.errors;
        console.log(errorResponse);
        if (errorResponse) {
          Object.keys(errorResponse).forEach(key => {
            console.log(key);
            if (key === "name") {
              setNameError(errorResponse[key].message);
            } else if (key === "email") {
              setEmailError(errorResponse[key].message);
            } else if (key === "password") {
              setPasswordError(errorResponse[key].message);
            }
          });
        }
      });
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
          {nameError && <div className="text-danger">{nameError}</div>}
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
          {emailError && <div className="text-danger">{emailError}</div>}
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
          {passwordError && <div className="text-danger">{passwordError}</div>}
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