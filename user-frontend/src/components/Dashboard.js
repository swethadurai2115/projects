// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom'; // Import Link and Outlet for routing
import './Dashboard.css';

const Dashboard = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/dashboard', {
                    headers: { Authorization: `Bearer ${token}` } // Ensure token is prefixed with "Bearer "
                });
                setMessage(response.data.message);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <h1>Welcome to Dashboard</h1>
            <nav className="navbar">
                <ul>
                    <li><Link to="/dashboard/sales">Sales</Link></li>
                    <li><Link to="/dashboard/products">Products</Link></li>
                    <li><Link to="/dashboard/customers">Customers</Link></li>
                    <li><Link to="/dashboard/reports">Reports</Link></li>
                </ul>
            </nav>
            <div className="content">
                <p>{message}</p>
                <Outlet /> {/* This is where nested routes will render */}
            </div>
        </div>
    );
};

export default Dashboard;
