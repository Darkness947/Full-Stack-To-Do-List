const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: 'User'  // Reference to User model
        },
        text: {
            type: String,
            required: true,
    },
    isCompleted: {
        type: Boolean,
        require: true,
        default: false,
    },
    },
    {
        timestamps: true,
    }
);

const Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;
