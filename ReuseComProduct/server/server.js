import dotenv from 'dotenv';
import express from 'express';
import "./config/mongoose.config.js";
import productRoutes from "./routes/product.routes.js";
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
productRoutes(app);

// Start the server
app.listen(port, () => console.log(`Server is running on port: ${port}`));