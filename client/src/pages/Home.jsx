import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Home.css'; 

const Home = () => {
    return (
        <div className="home-hero">
            <Container>
                <Row className="align-items: center">
                    <Col md={6} className="text-center text-md-start">
                    <h1 className="fade-in-up delay-1">Master Your Day, Effortlessly</h1>
                    <p className="fade-in-up delay-2">The simple, powerful, and beautiful to-do list designed for focused individuals. 
                        Stop juggling tasks and start achieving them.</p>
                        <Button as={Link} to="/Register" variant="primary" size="lg" className="cta-button fade-in-up delay-3">Get Started for Free</Button>
                    </Col>
                    <Col md={6} className="d-none d-md-block">
                    <div className="floating-visual">
                        <svg width="250" height="250" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 6L14 4H10V6H14ZM16 6V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V6H4V20H20V6H16ZM6 18V8H18V18H6ZM12 10L10.59 11.41L9 9.83L7.59 11.24L9 12.66L10.59 14.24L12 12.83L14.83 10L16.24 8.59L14.83 7.17L12 10Z" fill="rgba(0, 123, 255, 0.8)"/>
                        </svg>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;
