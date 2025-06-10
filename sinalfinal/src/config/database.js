const mysql = require("mysql2/promise");
const { db } = require("./env");

const pool = mysql.createPool({
  ...db,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
