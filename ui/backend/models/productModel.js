let products = [];
let idCounter = 1;

const getProducts = () => products;

const addProduct = (productData) => {
    const newProduct = { id: idCounter++, ...productData };
    products.push(newProduct);
    return newProduct;
};

const updateProduct = (id, updatedData) => {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) return null;
    products[productIndex] = { ...products[productIndex], ...updatedData };
    return products[productIndex];
};

const deleteProduct = (id) => {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) return null;
    return products.splice(productIndex, 1)[0];
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct };
