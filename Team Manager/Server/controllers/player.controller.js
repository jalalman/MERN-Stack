const Player = require("../models/player.model");

module.exports = {
    createPlayer: (req, res) => {
        Player.create(req.body)
            .then((newPlayer) => res.json(newPlayer))
            .catch((err) => res.status(400).json(err));
    },
    getAllPlayers: (req, res) => {
        Player.find()
            .then((allPlayers) => res.json(allPlayers))
            .catch((err) => res.json(err));
    },
    getPlayer: (req, res) => {
        Player.findOne({ _id: req.params.id })
            .then((onePlayer) => res.json(onePlayer))
            .catch((err) => res.json(err));
    },
    updatePlayer: (req, res) => {
        console.log("Request body:", req.body);
        Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then((updatedPlayer) => res.json(updatedPlayer))
            .catch((err) => {
                console.log("Error:", err);
                res.status(400).json(err);
            });
    },
    deletePlayer: (req, res) => {
        Player.deleteOne({ _id: req.params.id })
            .then((result) => res.json(result))
            .catch((err) => res.json(err));
    },
};