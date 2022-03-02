const inquirer = require('inquirer');
const mysql = require('mysql2');
const connections = require('./db/connection');


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
                    viewDepartments();
                    break;
                
                case "View all roles":
                    console.log(2);
                    break;
                
                case "View all employees":
                    console.log(3);
                    break;
                
                case "Add a department":
                    console.log(4);
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

function viewDepartments() {
    connections.allDepartments
    
};

menu();
