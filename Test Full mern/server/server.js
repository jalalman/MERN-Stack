require('dotenv').config();
require('./config/mongoose.config');
const port = process.env.DB_PORT;
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const AllMyUserRoutes = require('./routes/user.routes');
AllMyUserRoutes(app);


app.listen(port, () => {   // 8000 is the port number
    console.log(`Listening at Port ${port}`  );
})