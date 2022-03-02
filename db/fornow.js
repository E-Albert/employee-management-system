const connection = require('./connection');




const allDepartments = connection.query(
    'SELECT * FROM departments',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);
