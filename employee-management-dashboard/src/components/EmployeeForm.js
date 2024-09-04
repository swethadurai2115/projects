// src/components/EmployeeForm.js
import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onAddEmployee, employeeToEdit, onUpdateEmployee }) => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [role, setRole] = useState('');
    const [salary, setSalary] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (employeeToEdit) {
            setName(employeeToEdit.name);
            setDepartment(employeeToEdit.department);
            setRole(employeeToEdit.role);
            setSalary(employeeToEdit.salary);
        }
    }, [employeeToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !department || !role || !salary) {
            setError('All fields are required.');
            return;
        }

        const employee = { name, department, role, salary };

        if (employeeToEdit) {
            onUpdateEmployee(employeeToEdit.id, employee);
        } else {
            onAddEmployee(employee);
        }

        setName('');
        setDepartment('');
        setRole('');
        setSalary('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} className="employee-form">
            <h2>{employeeToEdit ? 'Edit Employee' : 'Add New Employee'}</h2>
            {error && <p className="error-message">{error}</p>}
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
            />
            <button type="submit">{employeeToEdit ? 'Update' : 'Add'} Employee</button>
        </form>
    );
};

export default EmployeeForm;
