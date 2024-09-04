import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EmployeeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        const employeeData = storedEmployees.find(emp => emp.id === parseInt(id));
        setEmployee(employeeData);
    }, [id]);

    if (!employee) return <p>Employee not found!</p>;

    return (
        <div className="employee-details">
            <h2>Employee Details</h2>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Role:</strong> {employee.role}</p>
            <p><strong>Salary:</strong> {employee.salary}</p>
            <button onClick={() => navigate('/')}>Back to List</button>
        </div>
    );
};

export default EmployeeDetails;