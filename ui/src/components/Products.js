// src/components/Products.js
import React, { useState, useEffect } from 'react';
import api from '../api'; // Import the API configuration
import './styles/Products.css';

function Products() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState('');

    useEffect(() => {
        // Fetch products data from the backend
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products data:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleAddProduct = async () => {
        if (newProduct.trim()) {
            try {
                const response = await api.post('/products', { name: newProduct });
                setProducts([...products, response.data]);
                setNewProduct('');
            } catch (error) {
                console.error('Error adding product:', error);
            }
        }
    };

    const handleRemoveProduct = async (id) => {
        try {
            await api.delete(`/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="products-container">
            <h2>Products Page</h2>
            <input
                type="text"
                value={newProduct}
                onChange={(e) => setNewProduct(e.target.value)}
                placeholder="Add new product"
            />
            <button onClick={handleAddProduct}>Add Product</button>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} <button onClick={() => handleRemoveProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
