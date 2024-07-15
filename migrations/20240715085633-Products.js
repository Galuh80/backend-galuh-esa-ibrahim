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
    code: { type: 'string', notNull: true }
  }).then(
    function() {
      return db.insert('products', ['name', 'code'], ['Product1', 'P001']);
    }
  ).then(
    function() {
      return db.insert('products', ['name', 'code'], ['Product2', 'P002']);
    }
  ).then(
    function() {
      return db.insert('products', ['name', 'code'], ['Product3', 'P003']);
    }
  );
};

exports.down = function(db) {
  return db.dropTable('products');
};

exports._meta = {
  "version": 1
};
