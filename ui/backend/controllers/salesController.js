// controllers/salesController.js
let sales = [
    { id: 1, name: 'Sale 1', amount: 100, date: '2023-08-01' },
    { id: 2, name: 'Sale 2', amount: 200, date: '2023-08-02' },
];

// Get all sales
exports.getAllSales = (req, res) => {
    res.json(sales);
};

// Get a sale by ID
exports.getSaleById = (req, res) => {
    const sale = sales.find(s => s.id === parseInt(req.params.id));
    if (!sale) return res.status(404).json({ message: 'Sale not found' });
    res.json(sale);
};

// Create a new sale
exports.createSale = (req, res) => {
    const newSale = {
        id: sales.length + 1,
        name: req.body.name,
        amount: req.body.amount,
        date: req.body.date,
    };
    sales.push(newSale);
    res.status(201).json(newSale);
};

// Update a sale
exports.updateSale = (req, res) => {
    const sale = sales.find(s => s.id === parseInt(req.params.id));
    if (!sale) return res.status(404).json({ message: 'Sale not found' });
    
    sale.name = req.body.name || sale.name;
    sale.amount = req.body.amount || sale.amount;
    sale.date = req.body.date || sale.date;

    res.json(sale);
};

// Delete a sale
exports.deleteSale = (req, res) => {
    sales = sales.filter(s => s.id !== parseInt(req.params.id));
    res.status(204).end();
};
