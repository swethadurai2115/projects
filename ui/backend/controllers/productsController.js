// controllers/productsController.js
let products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
];

// Get all products
exports.getAllProducts = (req, res) => {
    res.json(products);
};

// Get a product by ID
exports.getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
};

// Create a new product
exports.createProduct = (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

// Update a product
exports.updateProduct = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    
    product.name = req.body.name || product.name;
    res.json(product);
};

// Delete a product
exports.deleteProduct = (req, res) => {
    products = products.filter(p => p.id !== parseInt(req.params.id));
    res.status(204).end();
};
