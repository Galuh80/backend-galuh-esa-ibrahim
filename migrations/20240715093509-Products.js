'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('products', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: { type: 'string', notNull: true },
    description: { type: 'string', notNull: true },
    price: { type: 'int', notNull: true },
  }).then(
    function() {
      return db.insert('products', ['name', 'description', 'price'], ['Product1', 'P001', '200000']);
    }
  ).then(
    function() {
      return db.insert('products', ['name', 'description', 'price'], ['Product2', 'P002', '300000']);
    }
  ).then(
    function() {
      return db.insert('products', ['name', 'description', 'price'], ['Product3', 'P003', '400000']);
    }
  );
};

exports.down = function(db) {
  return db.dropTable('products');
};

exports._meta = {
  "version": 1
};
