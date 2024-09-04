// src/components/Sales.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sales.css';

const Sales = () => {
    const [salesItems, setSalesItems] = useState([]);
    
    useEffect(() => {
        const fetchSalesData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/sales'); // Adjust API endpoint as needed
                setSalesItems(response.data);
            } catch (error) {
                console.error('Error fetching sales data:', error);
            }
        };

        fetchSalesData();
    }, []);
    
    return (
        <div className="sales">
            <h2>Sales List</h2>
            <table className="sales-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {salesItems.length > 0 ? (
                        salesItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.itemName}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>{new Date(item.date).toLocaleDateString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No sales data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Sales;
