// src/components/Customers.js
import React, { useState, useEffect } from 'react';
import api from '../api'; // Import the API configuration
import './styles/Customers.css';

function Customers() {
    const [customers, setCustomers] = useState([]);
    const [newCustomer, setNewCustomer] = useState('');

    useEffect(() => {
        // Fetch customers data from the backend
        const fetchCustomers = async () => {
            try {
                const response = await api.get('/customers');
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching customers data:', error);
            }
        };
        fetchCustomers();
    }, []);

    const handleAddCustomer = async () => {
        if (newCustomer.trim()) {
            try {
                const response = await api.post('/customers', { name: newCustomer });
                setCustomers([...customers, response.data]);
                setNewCustomer('');
            } catch (error) {
                console.error('Error adding customer:', error);
            }
        }
    };

    const handleRemoveCustomer = async (id) => {
        try {
            await api.delete(`/customers/${id}`);
            setCustomers(customers.filter(customer => customer.id !== id));
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    };

    return (
        <div className="customers-container">
            <h2>Customers Page</h2>
            <div className="crud-section">
                <input
                    type="text"
                    value={newCustomer}
                    onChange={(e) => setNewCustomer(e.target.value)}
                    placeholder="Add new customer"
                />
                <button onClick={handleAddCustomer}>Add Customer</button>
            </div>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>
                        {customer.name} <button onClick={() => handleRemoveCustomer(customer.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Customers;
