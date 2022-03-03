const connection = require('./connection');

class DB  {
    constructor(connection) {
        this.connection = connection;
    }
        
    allDepartments() {
        return this.connection.promise().query(
            'SELECT * FROM department',
        );
    }

    allRoles() {
        return this.connection.promise().query(
            'SELECT * FROM role',
        );
    }

    allEmployees() {
        return this.connection.promise().query(
            'SELECT * FROM employee',
        );
    }

    addDepartment(department) {
        return this.connection.promise().query(
            'INSERT INTO department SET ?', department,
            
        );
    }
    addRoles() {
        return this.connection.promise().query(
       
    );
}

    addEmployee() {
        return this.connection.promise().query(
           
        );
    }

    updateEmployee() {
        return this.connection.promise.query(
            
           
        );
    }

}

module.exports = new DB(connection);