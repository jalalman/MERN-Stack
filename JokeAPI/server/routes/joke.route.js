const JokeController = require('../controllers/joke.controller');

module.exports = (app) => {
    // Retrieve all jokes
    app.get('/api/jokes', JokeController.getAllJokes);

    // Create a new joke
    app.post('/api/jokes', JokeController.createJoke);

    // Retrieve a single joke by ID
    app.get('/api/jokes/:id', JokeController.getOneJoke);

    // Update an existing joke by ID
    app.put('/api/jokes/:id', JokeController.updateJoke);

    // Delete a joke by ID
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
};