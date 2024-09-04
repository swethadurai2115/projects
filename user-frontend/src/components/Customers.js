import React, { useState, useEffect } from 'react';
import './Customers.css';
const Customers = () => {
    // Step 1: Define the state for customers
    const [customers, setCustomers] = useState([]);

    // Step 2: Use useEffect to simulate fetching data
    useEffect(() => {
        // Simulate fetching data from an API
        const fetchedCustomers = [
            { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
            { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '555-123-4567' },
        ];
        setCustomers(fetchedCustomers);
    }, []); // Empty dependency array ensures this runs only once on mount

    // Step 3: Render the customers in a table
    return (
        <div>
            <h2>Customers</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Customers;
