const mongoose = require('mongoose');
const username =process.env.DB_USER;
const password =process.env.DB_PASSWORD;
const dbname =process.env.user_db;


mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ys5hn.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

