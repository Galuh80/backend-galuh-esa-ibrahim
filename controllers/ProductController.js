const Product = require('../models/Product');

const productController = {};

productController.createProduct = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const productId = await Product.create(name, description, price);
        res.status(201).json({ id: productId, name, description, price });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Failed to create product' });
    }
};

productController.getAllProducts = async (req, res) => {
    try {
        const products = await Product.getAll();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error getting products:', error);
        res.status(500).json({ error: 'Failed to retrieve products' });
    }
};

productController.getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findById(productId);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error('Error getting product:', error);
        res.status(500).json({ error: 'Failed to retrieve product' });
    }
};

productController.updateProductById = async (req, res) => {
    const productId = req.params.id;
    const { name, description, price } = req.body;
    try {
        const affectedRows = await Product.update(productId, name, description, price);
        if (affectedRows > 0) {
            res.status(200).json({ message: 'Product updated successfully' });
        } else {
            res.status(404).json({ error: 'Product not found or not updated' });
        }
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Failed to update product' });
    }
};

productController.deleteProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const affectedRows = await Product.delete(productId);
        if (affectedRows > 0) {
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ error: 'Product not found or not deleted' });
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Failed to delete product' });
    }
};

module.exports = productController;
