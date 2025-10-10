const Todo = require('../models/Todos');
const mongoose = require('mongoose');

// @desc    Get user's todos
// @route   GET /api/todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Server Error when fetching todos' });
  }
};

// @desc    Create a new todo
// @route   POST /api/todos
const createTodo = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'Please add a text field' });
  }

  try {
    const todo = await Todo.create({
      text,
      user: req.user.id,
    });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Server Error when creating todo' });
  }
};

// @desc    Update a todo
// @route   PUT /api/todos/:id
const updateTodo = async (req, res) => {
  const { id } = req.params;

  // 1. Validate the ID format first
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: `Invalid ID format: ${id}` });
  }

  try {
    // 2. Find the todo first to ensure it exists and belongs to the user
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    // 3. Use the direct findByIdAndUpdate method for a reliable update
    //    The { new: true } option ensures it returns the updated document
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { isCompleted: !todo.isCompleted }, // Toggle the status
      { new: true }
    );

    res.status(200).json(updatedTodo);

  } catch (error) {
    console.error('Update Controller Error:', error);
    res.status(500).json({ message: 'Server Error when updating todo' });
  }
};


// @desc    Delete a todo
// @route   DELETE /api/todos/:id
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  // --- FIX 2: Check if the ID is a valid MongoDB ObjectId format ---
  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: `Invalid ID format: ${id}` });
  }

  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    // Check if the todo belongs to the user trying to delete it
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    await todo.deleteOne();

    res.status(200).json({ id: id }); // Send back the ID of the deleted todo
  } catch (error) {
      res.status(500).json({ message: 'Server Error when deleting todo' });
  }
};


module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
