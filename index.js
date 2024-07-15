const express = require('express');
const app = express();
const productRoutes = require('./routes/ProductRoutes');

app.use(express.json());
app.use(productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
