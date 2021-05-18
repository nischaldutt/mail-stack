const Promise = require("bluebird");
const createError = require("http-errors");

const connection = require("../database/mysql");

module.exports.isUserRegistered = ({
  table,
  selectColumn,
  filterColumn,
  filterColumnValue,
}) => {
  const query = `SELECT ${selectColumn} FROM ${table} WHERE ${filterColumn} = '${filterColumnValue}';`;
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      err
        ? reject(err)
        : result.length
        ? reject(createError(400, "User with entered email already exists."))
        : resolve(false);
    });
  });
};

module.exports.saveUserDetails = (user) => {
  const query = `INSERT INTO users SET ?`;
  return new Promise((resolve, reject) => {
    connection.query(query, user, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
