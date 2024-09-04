import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: Create a CSS file for styling

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Our App!</h1>
            <Link to="/register" className="register-button">Register</Link>
        </div>
    );
};

export default Home;
