const mysql = require("mysql");

const mysqlConfig = {
  connectionLimit: 100,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  multipleStatements: true,
};

const connection = mysql.createPool(mysqlConfig);

module.exports = connection;
