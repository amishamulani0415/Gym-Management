import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, handleLogout }) => {
    const navigate = useNavigate();

    const logout = () => {
        handleLogout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <ul>
                <div><h1>Gym Management Portal</h1></div>
                {!isAuthenticated ? (
                    <>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/add-member">Add Member</Link></li>
                        <li><Link to="/members">View Members</Link></li>
                        <li><button onClick={logout}>Logout</button></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
