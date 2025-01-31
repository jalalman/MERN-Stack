import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import './AuthorEdit.css'; // Import the CSS file

function AuthorEdit() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/authors/${id}/edit`, {
      name: name,
    })
      .then((res) => {
        console.log(res.data);
        navigate("/authors");
      })
      .catch((err) => {
        const errorResponse = err.response?.data?.errors;
        console.log(errorResponse);
        if (errorResponse) {
          Object.keys(errorResponse).forEach(key => {
            console.log(key);
            if (key === "name") {
              setNameError(errorResponse[key].message);
            }
          });
        }
      });
  };

  return (
    <div className="author-edit-container">
      <h1>Edit Author</h1>
      <Link to="/authors" className="home-link">Home</Link>
      <form onSubmit={handleSubmit} className="author-edit-form">
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className={nameError ? 'input-error' : ''}
        />
        {nameError && <p className="error-message">{nameError}</p>}
        <button type="submit" className="submit-button">Submit</button>
        <Link to="/authors" className="cancel-link">Cancel</Link>
      </form>
    </div>
  );
}

export default AuthorEdit;