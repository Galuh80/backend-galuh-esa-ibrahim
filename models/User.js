const db = require('../configurations/database');

const User = {};

User.create = (username, password, role_id) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (username, password, role_id) VALUES (?, ?, ?)';
        db.query(query, [username, password, role_id], (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results.insertId);
            }
        });
    });
};

User.findByUsername = (username) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM users WHERE username = ?';
        db.query(query, [username], (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0]);
            }
        });
    });
};

module.exports = User;
