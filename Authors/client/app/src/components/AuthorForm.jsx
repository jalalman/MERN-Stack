import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import './AuthorForm.css'; // Import the CSS file

function AuthorForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/authors", {
      name: name,
    })
      .then((res) => {
        console.log(res.data);
        navigate("/authors");
      })
      .catch(err => {
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
    <div className="author-form-container">
      <h1>Favorite authors</h1>
      <Link to="/authors" className="home-link">Home</Link>
      <p>Add a new author:</p>
      <form onSubmit={handleSubmit} className="author-form">
        <label>Name:</label>
        <input 
          type="text" 
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

export default AuthorForm;