const User = require("../models/user.model");

module.exports = {
    createUser: (req, res) => {
        User.create(req.body)
            .then(newUser => res.status(201).json(newUser))
            .catch(err => res.status(400).json(err));
    },
    getAllUsers: (req, res) => {
        User.find()
            .then(allUsers => res.json(allUsers))
            .catch(err => res.json(err));
    },
    getOneUser: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(oneUser => res.json(oneUser))
            .catch(err => res.json(err));
    },
    updateUser: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(updatedUser => res.status(201).json(updatedUser))
            .catch(err => res.status(400).json(err));
    },
    deleteUser: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
};