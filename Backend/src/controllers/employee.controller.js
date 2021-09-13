const express = require('express');
const router = express.Router();
const employeeService = require('../services/employees.service');

router.post('/', createEmployee)
router.get('/', getAllEmployees)
// // get all employees

 


module.exports=   router
 

// create new employee

async function createEmployee(req, res, next) {
    let empObj = req.body;
    // customerObj.updatedBy = '';
  

    try {
        const createdValue = await employeeService.createEmployee(empObj);
        console.log(createdValue);
        res.status(200).json({ 'success': true });
    }
    catch (err) {
        console.log('err');
        console.log(err);
        console.log(JSON.stringify(err));
        //res.status(400).json(err); // error from upate query not coming correctly 
        return res.json({ message: err, success: false })
    }
}
  


// get all employee list
// async function getEmployeeList (req, res){
//     //console.log('here all employees list');
//     employeeService.getAllEmployees((err, employees) =>{
//         console.log('We are here');
//         if(err)
//         res.send(err);
//         console.log('Employees', employees);
//         res.send(employees)
//     })
// }
 
function getAllEmployees(req, res, next) {
    console.log('hhhhhhhhhhhhhhhhhh===================00000000000000000=',typeof  employeeService.getAllEmployees);
    employeeService.getAllEmployees()
        .then(role => res.json(role))
        .catch(next);
}


// get employee by Name for earch by Name 
exports.getEmployeeByName = (req, res)=>{
    //console.log('get emp by id');
    employeeService.getEmployeeByName(req.params.first_name, (err, employee)=>{
        if(err)
        res.send(err);
        console.log('single employee data',employee);
        res.send(employee);
    })
}
 
 



 
// get employee by ID  for Update 
exports.getEmployeeByID = (req, res)=>{
    //console.log('get emp by id');
    employeeService.getEmployeeByID(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        console.log('single employee data',employee);
        // res.json({"first_name":"Dheeraj"});
        res.send(JSON.stringify({ status: 200, error: null, response: employee }));
    })
}
 
 
// update employee
exports.updateEmployee = (req, res)=>{
    const employeeReqData = new employeeService(req.body);
    console.log('employeeReqData update', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        employeeService.updateEmployee(req.params.id, employeeReqData, (err, employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee updated Successfully'})
        })
    }
}
 
// delete employee
exports.deleteEmployee = (req, res)=>{
    employeeService.deleteEmployee(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Employee deleted successully!'});
    })
}