require('dotenv').config();
const express = require('express');

const todoController = require('./controllers/todoController');

const port = process.env.PORT || 4444;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/todo', todoController);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
