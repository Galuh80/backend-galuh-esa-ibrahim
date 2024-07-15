const db = require('../configurations/database'); 

const Product = {};

Product.create = (name, description, price) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO products (name, description, price) VALUES (?, ?, ?)';
    db.query(query, [name, description, price], (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

Product.findById = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM products WHERE id = ?';
    db.query(query, [id], (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(null);
        }
      }
    });
  });
};

Product.getAll = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

Product.update = (id, name, description, price) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?';
    db.query(query, [name, description, price, id], (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.affectedRows);
      }
    });
  });
};

Product.delete = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM products WHERE id = ?';
    db.query(query, [id], (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.affectedRows);
      }
    });
  });
};

module.exports = Product;