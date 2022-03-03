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
                    console.log(1);
                    allTheDepartments();
                    break;
                
                case "View all roles":
                    console.log(2);
                    allTheRoles();
                    break;
                
                case "View all employees":
                    console.log(3);
                    allTheEmployees();
                    break;
                
                case "Add a department":
                    // createDepartment();
                    break;
                
                case "Add a role":
                    console.log(5);
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
    console.log('Keep pushing, youre doing great')
    db.allDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log("\n");
            console.table(departments);
            
        }).then(() => menu())
    
    
};

// function createDepartment() {
//     inquirer
//         .prompt([
//         {
//             name: "name",
//             message: "What is the name of the new department?"

//         }
//     ]).then(res => {
//         let newDepartment = res;
//         db.addDepartment(newDepartment)
//             .then(() => menu())
//     })
//     }



function allTheRoles() {
    console.log('Keep pushing, youre doing great')
    db.allRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            console.table(roles);

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
