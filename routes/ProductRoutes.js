const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const { authenticateToken, authorizeRole } = require('../configurations/middleware');

const dotenv = require('dotenv');
dotenv.config();

const merchantRoleId = parseInt(process.env.CONST_MERCHANT);
const customerRoleId = parseInt(process.env.CONST_CUSTOMER);

router.get('/products', authenticateToken, authorizeRole([merchantRoleId, customerRoleId]), productController.getAllProducts);
router.get('/products/:id', authenticateToken, authorizeRole([merchantRoleId]), productController.getProductById);
router.post('/products', authenticateToken, authorizeRole([merchantRoleId]), productController.createProduct);
router.put('/products/:id', authenticateToken, authorizeRole([merchantRoleId]), productController.updateProductById);
router.delete('/products/:id', authenticateToken, authorizeRole([merchantRoleId]), productController.deleteProductById);

module.exports = router;
