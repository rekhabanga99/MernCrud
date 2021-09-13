const express = require('express');
const router = express.Router();
 
const employeeController = require('../controllers/employee.controller');


 // get all employees

 function call() {
     console.log('ccccccccccc')
 }
router.get('/', employeeController.getAllEmployees);

// // create new employee
router.post('/', employeeController.createEmployee);
 
 
// get employee by ID
router.get('/:id',employeeController.getEmployeeByID);
 
 
// // get ID for Update 
// router.get('/searchRecord/:first_name',employeeController.getEmployeeByName);
 


// // update employee
// router.put('/:id', employeeController.updateEmployee);
 

 
 
module.exports = router;