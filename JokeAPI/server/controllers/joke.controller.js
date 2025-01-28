const Joke = require('../models/joke.model');


module.exports={
    //create a joke
    createJoke: (req, res) => {
        Joke.create(req.body)
            .then(newJoke => res.json(newJoke))
            .catch(err => res.json(err))
    },
    //get all jokes
    getAllJokes: (req, res) => {
        Joke.find()
            .then(allJokes => res.json(allJokes))
            .catch(err => res.json(err))
    },
    //get one joke
    getOneJoke: (req, res) => {
        Joke.findOne({_id: req.params.id})
            .then(oneJoke => res.json(oneJoke))
            .catch(err => res.json(err))
    },
    //update a joke
    updateJoke: (req, res) => {
        Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.json(err))
    },
    //delete a joke
    deleteJoke: (req, res) => {
        Joke.deleteOne({_id: req.params.id})
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}