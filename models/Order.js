const db = require('../configurations/database');

const Order = {};

Order.create = (userId, productId, quantity, totalPrice, free_shipping) => {
    return new Promise((resolve, reject) => {
        const query = `
            INSERT INTO orders (user_id, product_id, quantity, total_price, free_shipping)
            VALUES (?, ?, ?, ?, ?)
        `;
        db.query(query, [userId, productId, quantity, totalPrice, free_shipping], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results.insertId);
            }
        });
    });
};

Order.findById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM orders WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0]);
            }
        });
    });
};

Order.findAll = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM orders';
        db.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = Order;
