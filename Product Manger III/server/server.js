require ("dotenv").config();
require("./config/mongoose.config");
const express = require("express");
const app = express();
const port = process.env.PORT;


const core = require("cors");
app.use(core())
app.use(express.json());
const productRoutes = require("./routes/product.routes"); 
productRoutes(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});