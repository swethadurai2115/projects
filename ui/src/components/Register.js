import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        let tempErrors = {};
        tempErrors.username = username ? "" : "Username is required.";
        tempErrors.username = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username) ? "" : "Username must be a valid email.";
        tempErrors.password = password.length > 5 ? "" : "Password must be at least 6 characters long.";
        tempErrors.confirmPassword = confirmPassword === password ? "" : "Passwords do not match.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).every(key => tempErrors[key] === "");
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (validate()) {
            // Call your API to register
            // Assuming successful registration
            navigate('/login');
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="username">Email:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    {errors.username && <span className="error">{errors.username}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
