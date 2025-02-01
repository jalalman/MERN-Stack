import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './PlayerView.css';

function PlayerView() {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${id}`)
            .then((res) => {
                setPlayer(res.data);
            })
            .catch((err) => {
                console.log(err);
                setError("Player not found");
            });
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!player) {
        return <div className="loading">
            <i className="fas fa-spinner fa-spin"></i> Loading...
        </div>;
    }

    return (
        <div className="container">
            <h1 className="title">Player Details</h1>
            <div className="player-details">
                <p><strong>Name:</strong> {player.name}</p>
                <p><strong>Position:</strong> {player.position}</p>
            </div>
            <Link to={`/players/${player._id}/edit`} className="btn btn-warning">
                <i className="fas fa-edit"></i> Edit
            </Link>
            <Link to="/" className="btn btn-secondary">
                <i className="fas fa-arrow-left"></i> Back to Players List
            </Link>
        </div>
    );
}

export default PlayerView;