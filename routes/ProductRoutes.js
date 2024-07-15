const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

router.post('/api/v1/products', productController.createProduct);
router.get('/api/v1/products', productController.getAllProducts);
router.get('/api/v1/products/:id', productController.getProductById);
router.put('/api/v1/products/:id', productController.updateProductById);
router.delete('/api/v1/products/:id', productController.deleteProductById);

module.exports = router;
