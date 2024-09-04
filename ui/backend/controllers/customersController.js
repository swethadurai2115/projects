// controllers/customersController.js
let customers = [
    { id: 1, name: 'Customer 1' },
    { id: 2, name: 'Customer 2' },
];

// Get all customers
exports.getAllCustomers = (req, res) => {
    res.json(customers);
};

// Get a customer by ID
exports.getCustomerById = (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.json(customer);
};

// Create a new customer
exports.createCustomer = (req, res) => {
    const newCustomer = {
        id: customers.length + 1,
        name: req.body.name,
    };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
};

// Update a customer
exports.updateCustomer = (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    
    customer.name = req.body.name || customer.name;
    res.json(customer);
};

// Delete a customer
exports.deleteCustomer = (req, res) => {
    customers = customers.filter(c => c.id !== parseInt(req.params.id));
    res.status(204).end();
};
