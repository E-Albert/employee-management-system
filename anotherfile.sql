SELECT employee.id, CONCAT(employee.first_name, " ", employee.last_name) AS name
, department.name AS department,  role.title as role, role.salary,
 CONCAT(manager.first_name, " ",manager.last_name) as manager FROM employee
  LEFT JOIN role ON employee.role_id = role.id
   LEFT JOIN department ON role.department_id = department.id
 LEFT JOIN employee manager ON employee.manager_id = manager.id'