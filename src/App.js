import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Catalogue from './components/Catalogue';
import Contact from './components/Contact';
import Kart from './components/Kart';
import Login from './components/Login';
import Registration from './components/Registration';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/catalogue">Catalogue</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/kart">Kart</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/registration">Registration</Link></li>
            </ul>
        </nav>
    );
};

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/catalogue" element={<Catalogue />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/kart" element={<Kart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
