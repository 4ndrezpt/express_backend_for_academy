const mysql = require('mysql2');
require('dotenv').config();

const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const MYSQL_PORT = process.env.MYSQL_PORT;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_CHARSET = process.env.MSQL_CHARSET
//let result = dotenv.config();
console.log(MYSQL_HOST);

const db = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  charset: MYSQL_CHARSET
});

db.connect((err)=>{
  if (err) {
    throw err;
  }
  console.log('Database connection stablished');
})

module.exports = db;
