require ('dotenv').config();
require('./config/mongoose.config');
const express = require('express');
const app = express();
const cor = require('cors');
const port = process.env.PORT;
app.use(express.json());
app.use(cor());

const AuthorRoutes = require('./routes/author.routes');

AuthorRoutes(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})