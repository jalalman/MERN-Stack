import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ShowUser.css'; // Import custom CSS

function ShowUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8000/api/users/${id}`)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/users/update/${id}`, user)
      .then(res => {
        console.log(res);
        navigate('/');
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
  };

  if (!user) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Update User Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={user.name}
            onChange={handleChange}
          />
          {nameError && <div className="text-danger">{nameError}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleChange}
          />
          {emailError && <div className="text-danger">{emailError}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={user.password}
            onChange={handleChange}
          />
          {passwordError && <div className="text-danger">{passwordError}</div>}
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Update</button>
          <Link to="/" className="btn btn-secondary">Back</Link>
        </div>
      </form>
    </div>
  );
}

export default ShowUser;