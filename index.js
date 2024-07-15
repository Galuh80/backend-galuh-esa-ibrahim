const express = require('express');
const app = express();

const productRoutes = require('./routes/ProductRoutes');
const authRoutes = require('./routes/AuthRoutes');
const orderRoutes = require('./routes/OrderRoutes');

app.use(express.json());

app.use('/api/v1', productRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
