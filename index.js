const PORT = process.env.PORT || 4000;

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const { connectDb } = require("./config/db");

const app = express();

// dotenv config
dotenv.config();

// MongoDb Connection
connectDb();

// Middleware 
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api', require('./routes/apiRoutes'));


// Listen
app.listen(PORT, () =>{
    console.log(`Application is runing on ${PORT}`);
})