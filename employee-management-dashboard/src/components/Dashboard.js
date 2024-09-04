import React, { useState, useEffect } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

const LOCAL_STORAGE_KEY = 'employees';

const Dashboard = () => {
    const [employees, setEmployees] = useState([]);
    const [employeeToEdit, setEmployeeToEdit] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        setEmployees(storedEmployees);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employees));
    }, [employees]);

    const addEmployee = (employee) => {
        setEmployees([...employees, { ...employee, id: Date.now() }]);
    };

    const editEmployee = (employee) => {
        setEmployeeToEdit(employee);
    };

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(
            employees.map((employee) => (employee.id === id ? updatedEmployee : employee))
        );
        setEmployeeToEdit(null);
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter((employee) => employee.id !== id));
    };

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="dashboard">
            <EmployeeForm
                onAddEmployee={addEmployee}
                employeeToEdit={employeeToEdit}
                onUpdateEmployee={updateEmployee}
            />
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <EmployeeList
                employees={filteredEmployees}
                onEditEmployee={editEmployee}
                onDeleteEmployee={deleteEmployee}
            />
        </div>
    );
};

export default Dashboard;
