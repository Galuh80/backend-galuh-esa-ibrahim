const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRole } = require('../configurations/middleware');
const orderController = require('../controllers/OrderController');

const merchantRoleId = parseInt(process.env.CONST_MERCHANT);
const customerRoleId = parseInt(process.env.CONST_CUSTOMER);

router.post('/orders', authenticateToken, authorizeRole([customerRoleId]), orderController.createOrder);
router.get('/orders/:id', authenticateToken, authorizeRole([merchantRoleId]), orderController.getOrderById);
router.get('/orders', authenticateToken, authorizeRole([merchantRoleId]), orderController.getAllOrders);

module.exports = router;
