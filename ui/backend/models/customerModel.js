let customers = [];
let idCounter = 1;

const getCustomers = () => customers;

const addCustomer = (customerData) => {
    const newCustomer = { id: idCounter++, ...customerData };
    customers.push(newCustomer);
    return newCustomer;
};

const updateCustomer = (id, updatedData) => {
    const customerIndex = customers.findIndex(customer => customer.id === id);
    if (customerIndex === -1) return null;
    customers[customerIndex] = { ...customers[customerIndex], ...updatedData };
    return customers[customerIndex];
};

const deleteCustomer = (id) => {
    const customerIndex = customers.findIndex(customer => customer.id === id);
    if (customerIndex === -1) return null;
    return customers.splice(customerIndex, 1)[0];
};

module.exports = { getCustomers, addCustomer, updateCustomer, deleteCustomer };
