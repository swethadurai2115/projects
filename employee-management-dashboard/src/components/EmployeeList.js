// src/components/EmployeeList.js
import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = ({ employees, onEditEmployee, onDeleteEmployee }) => {
    return (
        <div className="employee-list">
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>
                                <Link to={`/employee/${employee.id}`}>
                                    {employee.name}
                                </Link>
                            </td>
                            <td>{employee.department}</td>
                            <td>{employee.role}</td>
                            <td>{employee.salary}</td>
                            <td>
                                <button onClick={() => onEditEmployee(employee)}>Edit</button>
                                <button onClick={() => onDeleteEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
