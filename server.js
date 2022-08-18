const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const userRoute = require('./routes/user-routes');

// create express app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB Error => ", err));

// apply middlewares
app.use(cors());
app.use(express.json());
app.use('/users', userRoute)

// port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
