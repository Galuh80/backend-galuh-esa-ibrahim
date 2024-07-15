'use strict';

var dbm;
var type;
var seed;
const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function(db) {
  const hashedPassword1 = await bcrypt.hash('password1', saltRounds);
  const hashedPassword2 = await bcrypt.hash('password2', saltRounds);
  
  await db.insert('users', ['username', 'password', 'role_id'], ['merchant_user', hashedPassword1, 1]);
  await db.insert('users', ['username', 'password', 'role_id'], ['customer_user', hashedPassword2, 2]);
};

exports.down = function(db) {
  return db.runSql('DELETE FROM users WHERE username IN (?, ?)', ['merchant_user', 'customer_user']);
};

exports._meta = {
  "version": 1
};
