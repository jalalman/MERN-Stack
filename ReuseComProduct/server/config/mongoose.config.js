import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();


const uri= `mongodb+srv://root:root@cluster0.ys5hn.mongodb.net/my_db?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));