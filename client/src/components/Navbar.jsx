import { Link } from "react-router-dom";
import { useState } from "react";

function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <div className="container-fluid">
                <Link className="navbar-brand text-primary" to="/">To-Do-List</Link>

                <button 
                    className="navbar-toggler" 
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login" onClick={() => setIsOpen(false)}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Register" onClick={() => setIsOpen(false)}>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default AppNavbar;
// This code defines a Navbar component that provides navigation links to different pages of the portfolio.
