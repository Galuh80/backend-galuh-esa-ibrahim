const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const { authenticateToken, authorizeRole } = require('../configurations/middleware');
const { registerUser, loginUser, logoutUser } = require('../controllers/AuthController');

const dotenv = require('dotenv');
dotenv.config();

const merchantRoleId = parseInt(process.env.CONST_MERCHANT);
const customerRoleId = parseInt(process.env.CONST_CUSTOMER);

// Route for Login
router.post('/api/v1/register', registerUser);
router.post('/api/v1/login', loginUser);
router.post('/api/v1/logout', authenticateToken, logoutUser);

// Routes for Products
router.get('/api/v1/products', authenticateToken, authorizeRole([merchantRoleId, customerRoleId]), productController.getAllProducts);
router.get('/api/v1/products/:id', authenticateToken, authorizeRole([merchantRoleId]), productController.getProductById);
router.post('/api/v1/products', authenticateToken, authorizeRole([merchantRoleId]), productController.createProduct);
router.put('/api/v1/products/:id', authenticateToken, authorizeRole([merchantRoleId]), productController.updateProductById);
router.delete('/api/v1/products/:id', authenticateToken, authorizeRole([merchantRoleId]), productController.deleteProductById);

module.exports = router;
