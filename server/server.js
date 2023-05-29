require('dotenv').config();

const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const dataRouter = require('./routes/data');

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
app.use('/api/data', dataRouter);

const Expense = require('./models/expense');
const Category = require('./models/expenseCategory');

// Create a new category
const category = new Category({
  name: 'Groceries',
  description: 'Expenses related to grocery shopping',
});

// Save the category to the database
category
  .save()
  .then((savedCategory) => {
    // Create a new expense with the saved category's ID
    const expense = new Expense({
      amount: 50,
      category: savedCategory._id,
      description: 'Grocery shopping at XYZ supermarket',
      date: new Date(),
      userId: '647230b61f1e64c5458c2e96', // Replace with an actual user ID
    });

    // Save the expense to the database
    return expense.save();
  })
  .then((savedExpense) => {
    // Retrieve the expense with populated category
    return Expense.findById(savedExpense._id).populate('category').exec();
  })
  .then((populatedExpense) => {
    // Log the expense with its populated category information
    console.log(populatedExpense);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`));
