import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './Index.css'; // Import the CSS file

function Index() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/authors/${id}/delete`)
      .then((res) => {
        setAuthors(authors.filter(author => author._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Favorite Authors</h1>
      <Link to="/authors/new">Add an author</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={index}>
              <td>{author.name}</td>
              <td>
                <Link to={`/authors/${author._id}/edit`} className="action-button">
                  <i className="fas fa-edit"></i>
                </Link>
                <button onClick={() => handleDelete(author._id)} className="action-button">
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;