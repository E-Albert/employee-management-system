const connection = require('./connection');

class Management {
    constructor(connection) {
        this.connection = connection;
    }
        
    allDepartments() {
        this.connection.promise().query(
            'SELECT * FROM department',
            function (err, results, fields) {
                console.log(results); // results contains rows returned by server
                console.log(fields); // fields contains extra meta data about results, if available
            }
        );
    }

    allRoles() {
        this.connection.promise().query(
            'SELECT * FROM role',
            function (err, results, fields) {
                console.log(results); // results contains rows returned by server
                console.log(fields); // fields contains extra meta data about results, if available
            }
        );
    }

    allEmployees() {
        this.connection.promise.query(
            'SELECT * FROM employee',
            function (err, results, fields) {
                console.log(results); // results contains rows returned by server
                console.log(fields); // fields contains extra meta data about results, if available
            }
        );
    }

    addDepartment() {
        this.connection.promise.query(
            'INSERT INTO department (id, name) VALUES',
            function (err, results, fields) {
                console.log(results); // results contains rows returned by server
                console.log(fields); // fields contains extra meta data about results, if available
            }
        );
    }
    addRoles() {
    this.connection.promise.query(
        'SELECT * FROM departments',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );
}

    addEmployee() {
        this.connection.promise.query(
            'SELECT * FROM departments',
            function (err, results, fields) {
                console.log(results); // results contains rows returned by server
                console.log(fields); // fields contains extra meta data about results, if available
            }
        );
    }

    updateEmployee() {
        this.connection.promise.query(
            'SELECT * FROM departments',
            function (err, results, fields) {
                console.log(results); // results contains rows returned by server
                console.log(fields); // fields contains extra meta data about results, if available
            }
        );
    }

}

module.exports = new Management(connection);