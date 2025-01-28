require('dotenv').config();
require('./config/mongoose.config');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Default to port 3000 if PORT is not defined
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// Routes
const jokeRoutes = require("./routes/joke.route");
jokeRoutes(app);

// Start server
app.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log(`Listening at Port ${port}`);
    }
});