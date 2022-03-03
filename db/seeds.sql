INSERT INTO department (id, name)
	VALUES 
		(1, "Engineering"),
		(2, "Finance"),
		(3, "Marketing"),
		(4, "Human Resources");
	
SELECT * FROM department;

INSERT INTO role (id, title, salary, department_id)
	VALUES 
		(1, "Software Engineer", 130000, 1),
		(2, "Software Engineer", 125000, 1),
		(3, "Accountant", 82000, 2),
		(4, "Accountant", 82000, 2),
		(5, "Marketing Coordinator",100000, 3),
		(6, "Marketing Assistant", 55000, 3),
		(7, "HR Director", 76000, 4),
		(8, "HR Assistant", 50000, 4);
	
SELECT * FROM role;

INSERT INTO employee (id, first_name , last_name , role_id, manager_id)
	VALUES 
		(1, "Emerson", "Albert", 1, null),
		(2, "Ashley", "Williams", 5, null),
		(3, "Robin", "Gonzales", 6, 2),
		(4, "Joe", "Belly", 8, 8),
		(5, "Cece", "Alex", 2, 1),
		(6, "Alejandra", "Cooly", 3, null),
		(7, "Michael", "Scott", 4, null),
		(8, "Rogan", "Smith", 7,null);
	
SELECT * FROM employee;