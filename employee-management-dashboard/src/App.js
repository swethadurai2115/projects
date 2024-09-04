import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmployeeDetails from './components/EmployeeDetails';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Employee Management Dashboard</h1>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/employee/:id" element={<EmployeeDetails />} />
            </Routes>
        </div>
    );
}

export default App;