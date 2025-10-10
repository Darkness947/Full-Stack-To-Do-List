import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup, Spinner, Alert } from 'react-bootstrap';
import todoService from '../services/todoService';
import { FaTrash, FaCheckCircle, FaRegCircle } from 'react-icons/fa';

const Todo = () => {
    const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await todoService.getTodos();
        setTodos(data);
      } catch (err) {
        console.error('Fetch Error:', err);
        setError('Failed to fetch todos.');
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!text) return;
    try {
      const newTodo = await todoService.createTodo({ text });
      setTodos([...todos, newTodo]);
      setText('');
      setError(''); // Clear error on success
    } catch (err) {
      console.error('Create Error:', err);
      setError('Failed to create todo.');
    }
  };

  // --- THIS IS THE CORRECTED FUNCTION ---
  const handleToggle = async (id, currentStatus) => {
    try {
      setError(''); // Clear previous errors
      console.log(`Attempting to update todo ${id} to status ${!currentStatus}`);
      
      const updatedTodoFromServer = await todoService.updateTodo(id, { isCompleted: !currentStatus });
      console.log('Received updated todo from server:', updatedTodoFromServer);

      // Create a new array with the updated item
      const newTodos = todos.map((todo) =>
        todo._id === id ? updatedTodoFromServer : todo
      );

      setTodos(newTodos);
      console.log('Frontend state updated.');
    } catch (err) {
      console.error('Update Error:', err);
      setError('Failed to update todo.');
    }
  };


  const handleDelete = async (id) => {
    try {
      setError(''); // Clear previous errors
      await todoService.deleteTodo(id);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error('Delete Error:', err);
      setError('Failed to delete todo.');
    }
  };


  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="light" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card bg="dark" text="white" className="shadow">
            <Card.Body>
              <Card.Title className="text-center mb-4 fs-2">My To-Do List</Card.Title>
              {error && <Alert variant="danger" onClose={() => setError('')} dismissible>{error}</Alert>}
              <Form onSubmit={handleCreate}>
                <Form.Control
                  type="text"
                  placeholder="Add a new task..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="mb-3"
                />
                <div className="d-grid">
                  <Button type="submit" variant="primary">Add Task</Button>
                </div>
              </Form>
              <hr />
              <ListGroup variant="flush">
                {todos.length > 0 ? (
                  todos.map((todo) => (
                    <ListGroup.Item
                      key={todo._id}
                      className="d-flex justify-content-between align-items-center bg-dark text-white"
                    >
                      <div
                        onClick={() => handleToggle(todo._id, todo.isCompleted)}
                        style={{ cursor: 'pointer' }}
                        className="d-flex align-items-center"
                      >
                        {todo.isCompleted ? (
                          <FaCheckCircle className="text-success me-3" style={{ fontSize: '1.2rem' }} />
                        ) : (
                          <FaRegCircle className="me-3" style={{ fontSize: '1.2rem' }} />
                        )}
                        <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
                          {todo.text}
                        </span>
                      </div>
                      <Button variant="outline-danger" size="sm" onClick={() => handleDelete(todo._id)}>
                        <FaTrash />
                      </Button>
                    </ListGroup.Item>
                  ))
                ) : (
                  <p className="text-center mt-3">You have no tasks. Add one above!</p>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;
