Employee Directory

S1->Id Name Designation Mobile Email 
Features -> CRUD, Search Filter.
Using -> Postgresql, Nodejs, Express, React

<!-- POSTGRESQL OPERATIONS>>>>
 CREATE SEQUENCE employee_sequence INCREMENT 1 START 1;
 CREATE SEQUENCE team_sequence INCREMENT 1 START 1;
 CREATE SEQUENCE assignment_sequence INCREMENT 1 START 1;

 CREATE TABLE employee(
     id INTEGER NOT NULL DEFAULT nextval ('employee_sequence),
     name VARCHAR(50) NOT NULL,
     data_of_joining TIMESTAMP NOT NULL,
     designation VARCHAR(50),
     gender VARCHAR(10),
     email VARCHAR(50),
     bio VARCHAR(500),
     CONSTRAINT employee_constraint PRIMARY KEY(id)
 );

 CREATE TABLE team(
     id INTEGER NOT NULL nextval('team_sequence),
     name VARCHAR(50) NOT NULL,
     email VARCHAR(50),
     description VARCHAR(500)
     CONSTRAINT team_constraint PRIMARY KEY(id)
 );

 CREATE TABLE employee_assingment(
     id INTEGER NOT NULL nextval('employee_assingment),
     employee_id INTEGER NOT NULL,
     team_id INTEGER NOT NULL,
     CONSTRAINT employee_assingment_constraint PRIMARY KEY(id),
     CONSTRAINT fk_employee FOREIGN KEY(employee_id) REFERENCES employee(id),
     CONSTRAINT fk_team FOREIGN KEY(team) REFERENCES team(id),

 ) -->