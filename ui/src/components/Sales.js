// src/components/Sales.js
import React, { useState, useEffect } from 'react';
import api from '../api'; // Import the API configuration
import './styles/Sales.css';

function Sales() {
    const [sales, setSales] = useState([]);
    const [newSale, setNewSale] = useState('');

    useEffect(() => {
        // Fetch sales data from the backend
        const fetchSales = async () => {
            try {
                const response = await api.get('/sales');
                setSales(response.data);
            } catch (error) {
                console.error('Error fetching sales data:', error);
            }
        };
        fetchSales();
    }, []);

    const handleAddSale = async () => {
        if (newSale.trim()) {
            try {
                const response = await api.post('/sales', { name: newSale });
                setSales([...sales, response.data]);
                setNewSale('');
            } catch (error) {
                console.error('Error adding sale:', error);
            }
        }
    };

    const handleRemoveSale = async (id) => {
        try {
            await api.delete(`/sales/${id}`);
            setSales(sales.filter(sale => sale.id !== id));
        } catch (error) {
            console.error('Error deleting sale:', error);
        }
    };

    return (
        <div className="sales-container">
            <h2>Sales Page</h2>
            <input
                type="text"
                value={newSale}
                onChange={(e) => setNewSale(e.target.value)}
                placeholder="Add new sale"
            />
            <button onClick={handleAddSale}>Add Sale</button>
            <ul>
                {sales.map((sale) => (
                    <li key={sale.id}>
                        {sale.name} <button onClick={() => handleRemoveSale(sale.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sales;
