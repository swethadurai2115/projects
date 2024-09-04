const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const productsRoutes = require('./routes/productsRoutes');
const customersRoutes = require('./routes/customersRoutes');
const reportsRoutes = require('./routes/reportsRoutes');
const salesRoutes = require('./routes/salesRoutes');

app.use('/api/products', productsRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/sales', salesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
