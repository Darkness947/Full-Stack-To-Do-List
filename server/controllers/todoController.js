const Todo = require('../models/Todos');

// @desc Get user's todos
// @route GET /api/todos
const getTodos = async (req, res) => {
    // Find todos for the authenticated user
    const todos = await Todo.find({ user: req.user._id });
    res.json(todos);
};

// @desc Create a new todo
// @route POST /api/todos
const createTodo = async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ message: 'Text is required' });
    }

    const todo = await Todo.create({ text, user: req.user.id });
    res.status(201).json(todo);
};

// @desc Update a todo
// @route PUT /api/todos/:id
const updateTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    // Ensure the logged-in user matches the todo's user
    if (todo.user.toString() !== req.user.id) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    // Update the isCompleted status
    todo.isCompleted = req.body.isCompleted;
    const updatedTodo = await todo.save();

    res.json(updatedTodo);
};

// @desc Delete a todo
// @route DELETE /api/todos/:id
const deleteTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    // Ensure the logged-in user matches the todo's user
    if (todo.user.toString() !== req.user.id) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    await todo.remove();

    res.json({ id: req.params.id });  // Return the ID of the deleted todo
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
