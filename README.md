Full-Stack MERN To-Do List Web App
A complete and feature-rich to-do list application built from the ground up using the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates a full development lifecycle, from local setup to final deployment, including user authentication, database management, and a dynamic, responsive user interface.

✨ Live Demo
 https://to-do-list-dev8.netlify.app

🚀 Features
User Authentication: Secure user registration and login system using JSON Web Tokens (JWT).

Password Hashing: Passwords are never stored in plain text, using bcryptjs for robust security.

Full CRUD Functionality: Users can Create, Read, Update (mark as complete), and Delete their own to-do items.

Protected Routes: Backend API routes are protected, ensuring users can only access and modify their own data.

Responsive UI: A modern, card-based interface built with React and Bootstrap that looks great on all devices.

Animated Homepage: An attractive, animated hero section to welcome users.

Cloud Database: Data is persisted in a free-tier MongoDB Atlas cloud database.

Separate Deployment: The frontend and backend are deployed independently on Netlify and Render, a standard practice for modern web applications.

🛠️ Tech Stack
This project is built with a modern, full-stack JavaScript toolkit:

Frontend:

React (with Vite)

React Router for page navigation.

React Bootstrap for UI components.

Axios for API requests.

Backend:

Node.js

Express for the server framework.

MongoDB with Mongoose for the database.

JSON Web Token (JWT) for authentication.

bcryptjs for password hashing.

CORS for cross-origin requests.

Deployment:

Frontend: Netlify

Backend: Render
