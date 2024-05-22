require('dotenv').config();
const mongoose = require('../database');

const todoSchema = new mongoose.Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
