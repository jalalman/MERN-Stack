const mongoose = require('mongoose');

const username=process.env.ATLAST_USERNAME;
const password=process.env.ATLAST_PASSWORD;
const dbname=process.env.DB;

const uri= `mongodb+srv://${username}:${password}@cluster0.ys5hn.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));