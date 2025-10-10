import axios from "axios";

const API_URL = "http://localhost:5000/api/todos/";

// Get all todos
const getTodos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Create a new todo
const createTodo = async (todoData) => {
    const response = await axios.post(API_URL, todoData);
    return response.data;
};

// Update a todo
const updateTodo = async (id, todoData) => {
    const response = await axios.put(`${API_URL}${id}`, todoData);
    return response.data;
};

// Delete a todo
const deleteTodo = async (id) => {
    const response = await axios.delete(`${API_URL}${id}`);
    return response.data;
};

const todoService = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};

export default todoService;
