const Order = require('../models/Order');
const Product = require('../models/Product');

const createOrder = async (req, res) => {
    const getFreeShipping = 1;
    const notGetFreeShipping = 0;

    const { userId, productId, quantity } = req.body;

    try {
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Calculate total price
        let totalPrice = product.price * quantity;

        // Apply discount 10 % if applicable
        if (totalPrice > 50000) {
            totalPrice *= 0.9; 
        }

        // Determine if free shipping applies
        const freeShipping = totalPrice > 15000 ? getFreeShipping : notGetFreeShipping;

        const orderId = await Order.create(userId, productId, quantity, totalPrice, freeShipping);
        res.status(201).json({ message: 'Order created successfully', orderId, freeShipping });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create order', details: error.message });
    }
};

const getOrderById = async (req, res) => {

    const { id } = req.params;

    try {
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch order', details: error.message });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders', details: error.message });
    }
};

module.exports = { createOrder, getOrderById, getAllOrders };
