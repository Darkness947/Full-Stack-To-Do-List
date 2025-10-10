import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Todo from './pages/Todo';


function App() {
  return (
    <>
    <Router>
      <div className='d-flex flex-column min-vh-100 bg-dark text-white'>
        <AppNavbar />
        <main className='flex-grow-1'>
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
             <Route path='/Todo' element={<PrivateRoute />}>
                <Route index element={<Todo />} />
              </Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App;
