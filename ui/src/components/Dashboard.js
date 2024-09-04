import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Dashboard.css';

function Dashboard() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="dashboard-container">
            <div className="navbar">
                <div className="logo">Dashboard</div>
                <div className="profile" onClick={toggleDropdown}>
                    <i className="fas fa-user-circle"></i> Profile
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <ul>
                                <li>Settings</li>
                                <li>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="dashboard-content">
                <div className="sidebar">
                    <ul>
                        <li><Link to="/sales"><i className="fas fa-chart-line"></i> Sales</Link></li>
                        <li><Link to="/products"><i className="fas fa-box-open"></i> Products</Link></li>
                        <li><Link to="/customers"><i className="fas fa-users"></i> Customers</Link></li>
                        <li><Link to="/reports"><i className="fas fa-file-alt"></i> Reports</Link></li>
                    </ul>
                </div>
                <div className="main-content">
                    <div className="welcome-message">
                        <h1>Welcome to the Dashboard</h1>
                    </div>
                    <div className="dashboard-grid">
                        <div className="card">
                            <h3>Sales</h3>
                            <p>Track your sales performance and revenue.</p>
                            <i className="card-icon fas fa-chart-line"></i>
                        </div>
                        <div className="card">
                            <h3>Products</h3>
                            <p>Manage your products and inventory.</p>
                            <i className="card-icon fas fa-box-open"></i>
                        </div>
                        <div className="card">
                            <h3>Customers</h3>
                            <p>View customer details and interactions.</p>
                            <i className="card-icon fas fa-users"></i>
                        </div>
                        <div className="card">
                            <h3>Reports</h3>
                            <p>Generate and review business reports.</p>
                            <i className="card-icon fas fa-file-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;