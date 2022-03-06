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
            // 'SELECT employee.id, CONCAT(first_name, " ", last_name) AS name, role.title as role, manager_id as manager FROM employee LEFT JOIN role ON employee.role_id = role.id'
            'SELECT employee.id, CONCAT(employee.first_name, " ", employee.last_name) AS name, department.name AS department,  role.title as role, role.salary, CONCAT(manager.first_name, " ",manager.last_name) as manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id'
        );
    }

    addDepartment(department) {
        return this.connection.promise().query(
            'INSERT INTO department SET ?', department,
            
        );
    }
    addRoles(name, salary, id) {
        return this.connection.promise().query(
            'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [name, salary, id]
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