// backend/routes/salesRoutes.js
const express = require('express');
const router = express.Router();

// Mock data
const salesData = [
    {
        id: 1,
        itemName: 'Product A',
        quantity: 10,
        price: 29.99,
        date: '2024-08-30T12:00:00Z',
    },
    {
        id: 2,
        itemName: 'Product B',
        quantity: 5,
        price: 49.99,
        date: '2024-08-31T15:00:00Z',
    },
    // Add more items as needed
];

// GET /api/sales
router.get('/sales', (req, res) => {
    res.json(salesData);
});

module.exports = router;
