import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import MemberList from './components/MemberList';
import AddMember from './components/AddMember';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <div>
                <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login handleLogin={handleLogin} />} />
                    <Route path="/members" element={<MemberList />} />
                    <Route path="/add-member" element={<AddMember />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
