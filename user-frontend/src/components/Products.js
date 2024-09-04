import React, { useState, useEffect } from 'react';
import './Products.css';
const Products = () => {
    // Step 1: Define the state for products
    const [products, setProducts] = useState([]);

    // Step 2: Use useEffect to simulate fetching data
    useEffect(() => {
        // Simulate fetching data from an API
        const fetchedProducts = [
            { id: 1, name: 'Product A', price: 29.99, description: 'High-quality product A' },
            { id: 2, name: 'Product B', price: 49.99, description: 'High-quality product B' },
            { id: 3, name: 'Product C', price: 19.99, description: 'High-quality product C' },
        ];
        setProducts(fetchedProducts);
    }, []); // Empty dependency array ensures this runs only once on mount

    // Step 3: Render the products in a table
    return (
        <div>
            <h2>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
