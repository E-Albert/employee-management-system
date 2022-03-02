const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employee_db'
},
    console.log(`Connected to employee_db database.`)
);


module.exports = connection;
