
const mongoose = require('mongoose');

const username =process.env.DB_USER
const password = process.env.DB_PASSWORD
const db_name = process.env.DB_NAME

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ys5hn.mongodb.net/${db_name}?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log("Successfully connected to the database"))
    .catch(err => console.log("An error has occurred while connecting to the database", err));