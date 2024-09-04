let sales = [];
let idCounter = 1;

const getSales = () => sales;

const addSale = (saleData) => {
    const newSale = { id: idCounter++, ...saleData };
    sales.push(newSale);
    return newSale;
};

const updateSale = (id, updatedData) => {
    const saleIndex = sales.findIndex(sale => sale.id === id);
    if (saleIndex === -1) return null;
    sales[saleIndex] = { ...sales[saleIndex], ...updatedData };
    return sales[saleIndex];
};

const deleteSale = (id) => {
    const saleIndex = sales.findIndex(sale => sale.id === id);
    if (saleIndex === -1) return null;
    return sales.splice(saleIndex, 1)[0];
};

module.exports = { getSales, addSale, updateSale, deleteSale };
