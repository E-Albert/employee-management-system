INSERT INTO department (name)
	VALUES 
		("Engineering"),
		("Finance"),
		("Marketing"),
		("Human Resources");
	
SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
	VALUES 
		("Software Engineer", 130000, 1),
		("Software Engineer", 125000, 1),
		("Accountant", 82000, 2),
		("Accountant", 82000, 2),
		("Marketing Coordinator",100000, 3),
		("Marketing Assistant", 55000, 3),
		("HR Director", 76000, 4),
		("HR Assistant", 50000, 4);
	
SELECT * FROM role;

INSERT INTO employee (first_name , last_name , role_id, manager_id)
	VALUES 
		("Emerson", "Albert", 1, null),
		("Ashley", "Williams", 5, null),
		("Joe", "Belly", 8, 8),
		("Cece", "Alex", 2, 1),
		("Alejandra", "Cooly", 3, null),
		("Michael", "Scott", 4, null),
		("Rogan", "Smith", 7,null);
	
SELECT * FROM employee;