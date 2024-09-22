import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UserProfile from './UserProfile';

const Header = () => {
    const location = useLocation();
    
    // Render the header only on the main page
    if (location.pathname !== '/') {
        return null;
    }

    return (
        <div>
            <h1>Welcome to the User Portal</h1>
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/:username" element={<UserProfile />} />
            </Routes>
        </Router>
    );
};

export default App;
