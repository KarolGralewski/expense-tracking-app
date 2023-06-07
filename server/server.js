require('dotenv').config();

const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const dataRouter = require('./routes/data');
const expenseRoutes = require('./routes/expenses');
const incomesRoutes = require('./routes/incomes');

// const verifyToken = require('./middlewares/verifyToken');
const express = require('express');
const cors = require('cors');
const app = express();
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
app.use('/api/data', dataRouter);
app.use('/api/expenses', expenseRoutes);
app.use('/api/incomes', incomesRoutes);

app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`));
