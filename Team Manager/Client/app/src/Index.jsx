import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Index.css';

function Index() {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then((res) => {
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const deletePlayer = (playerId) => {
        axios.delete(`http://localhost:8000/api/players/${playerId}/delete`)
            .then((res) => {
                setPlayers(players.filter(player => player._id !== playerId));
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <h1 className="title">Players</h1>
            <Link to="/addplayers" className="btn btn-primary">
                <i className="fas fa-plus"></i> Add Player
            </Link>
            {loaded ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, i) => (
                            <tr key={i}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td>
                                    <Link to={`/players/${player._id}`} className="btn btn-info btn-sm">
                                        <i className="fas fa-eye"></i> View
                                    </Link>
                                    <Link to={`/players/${player._id}/edit`} className="btn btn-warning btn-sm">
                                        <i className="fas fa-edit"></i> Edit
                                    </Link>
                                    <button onClick={() => deletePlayer(player._id)} className="btn btn-danger btn-sm">
                                        <i className="fas fa-trash"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="loading">
                    <i className="fas fa-spinner fa-spin"></i> Loading...
                </div>
            )}
        </div>
    );
}

export default Index;