import { useState } from "react";
import { Form, Button, Card, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const { loginuser } = useAuth();
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await loginuser({ email, password });
            navigate('/Todo');  // Redirect to Todo page on successful login
        }
        catch (err) {
            setError(err.message || 'Login failed');  // Display error message from the backend response
        }
        console.log('Form Submitted:', formData);
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <Card className="p-4 shadow-sm" bg="dark" text="white">
                        <Card.Body>
                            <h2 className="text-center mb-4">Login</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        value={email}
                                        onChange={onChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={onChange}
                                        required
                                    />
                                </Form.Group>

                                <div className="`d-grid">
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default login;
