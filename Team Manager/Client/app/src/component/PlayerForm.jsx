import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './PlayerForm.css';
import { Link } from "react-router-dom";

function PlayerForm() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [position, setPosition] = useState("");
    const [positionError, setPositionError] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/players", { name, position })
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => {
                const errorResponse = err.response?.data?.errors;
                console.log(errorResponse);
                if (errorResponse) {
                    Object.keys(errorResponse).forEach(key => {
                        if (key === "name") {
                            setNameError(errorResponse[key].message);
                        }
                        if (key === "position") {
                            setPositionError(errorResponse[key].message);
                        }
                    });
                }
            });
    };

    return (
        <div className="container">
            <h1 className="title">Add Player</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="form-control"
                    />
                    {nameError && <p className="error">{nameError}</p>}
                </div>
                <div className="form-group">
                    <label>Position:</label>
                    <select 
                        value={position} 
                        onChange={(e) => setPosition(e.target.value)}
                        className="form-control"
                    >
                        <option value="">Select Position</option>
                        <option value="Goalkeeper">Goalkeeper</option>
                        <option value="Defender">Defender</option>
                        <option value="Midfielder">Midfielder</option>
                        <option value="Forward">Forward</option>
                    </select>
                    {positionError && <p className="error">{positionError}</p>}
                </div>
                <button type="submit" className="btn btn-primary">
                    <i className="fas fa-plus"></i> Add Player
                </button>
                <Link to="/" className="btn btn-secondary">
                    <i className="fas fa-arrow-left"></i> Back to Players List
                </Link>
            </form>
        </div>
    );
}

export default PlayerForm;