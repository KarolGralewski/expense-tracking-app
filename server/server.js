require('dotenv').config();

const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;

//database
const connection = require('./db');
connection();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`));
