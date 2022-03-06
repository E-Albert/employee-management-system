const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db');
require('console.table')


//beginning prompt
menu = () => {

    inquirer
        //asks the user what operation they would like to perform
        .prompt([
            {
                type: "list",
                name: "operation",
                message: "What operation would you like to perform?",
                choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"]
            }
        ])
        .then(({ operation }) => {
            console.log(operation);

            switch (operation) {

                case "View all departments":
                    allTheDepartments();
                    break;

                case "View all roles":
                    allTheRoles();
                    break;

                case "View all employees":
                    allTheEmployees();
                    break;

                case "Add a department":
                    createDepartment();
                    break;

                case "Add a role":
                    createRole();
                    break;

                case "Add an employee":
                    console.log(6);
                    break;

                case "Update an employee role":
                    console.log(7);
                    break;

                default:
                    break;
            }



        })

}

function allTheDepartments() {

    db.allDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log("\n");
            console.table(departments);

        }).then(() => menu())


};

function createDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of the new department?"

            }
        ]).then(res => {
            let newDepartment = res;
            db.addDepartment(newDepartment)
                .then(() =>
                    console.log(`New department added.`))
                .then(() => menu())
        })
}



function allTheRoles() {

    db.allRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            console.table(roles);

        }).then(() => menu())


};

function createRole() {

    db.allDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log(departments);

            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "id",
                        message: "What is the id of the department?"


                    },
                    {
                        type: "input",
                        name: "name",
                        message: "What is the name of the role?"
                    },
                    {
                        type: "input",
                        name: "salary",
                        message: "What is salary for the role?"
                    }
                ])

                .then(({ name, salary, id }) => {
                    console.log(name, salary, id);
                    db.addRoles(name, salary, id);
                    console.log(`Role added.`)
                })



                .then(() => menu())
        })
}


function allTheEmployees() {
    console.log('Keep pushing, youre doing great')
    db.allEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);

        }).then(() => menu())


};

function allTheEmployees() {
    console.log('Keep pushing, youre doing great')
    db.allEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);

        }).then(() => menu())


};


menu();
