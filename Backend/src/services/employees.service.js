var db  = require('../../config/db.config');
 
module.exports = {
   createEmployee,
   getAllEmployees
  //addData

};
var CreateEmployee = function(employee){
    this.first_name     =   employee.fname;
    this.last_name      =   employee.lname;
    this.email          =   employee.email;
    this.phone          =   employee.phone;
    this.salary         =   employee.salary;
}
 


async function createEmployee(Employee, result) {
    const employeeReqData=new CreateEmployee(Employee)
    console.log( " createEmployee----------------------------",employeeReqData)
    const isUserExists = await db.Employee.findOne({ where: { phone: employeeReqData.phone } });
    if (isUserExists) {
        const existingRow = JSON.parse(JSON.stringify(isUserExists));
        result(null, err);
        throw 'Mobile No. "' + employeeReqData.phone + '" is already taken, and your case is under review';
        
    }
    else{
       // await db.Employee.create(employeeReqData);

        return await db.Employee.create(employeeReqData)
    //     console.log('Employee created successfully');
    //   result(null, res)
                
    }
    
}


async function getAllEmployees() {
    const employee = await db.Employee.findAll({})
    return employee;
}

// // get employee by Name for Search Data by name 
// Employee.getEmployeeByName = (first_name, result)=>{
//     dbConn.query('SELECT * FROM employees WHERE first_name=?', first_name, (err, res)=>{
//         if(err){
//             console.log('Error while fetching employee by id', err);
//             result(null, err);
//         }else{
//             result(null, res);
//         }
//     })
// }
 

 
// // get employee by ID for update
// Employee.getEmployeeByID = (id, result)=>{
//     dbConn.query('SELECT * FROM employees WHERE id=?', id, (err, res)=>{
//         if(err)
//         {
//             console.log('Error while fetching employee by id', err);
//             result(null, err);
//         }
//         else
//         {
//             result(null, res);
//         }
//     })
// }
 
 
// // update employee
// Employee.updateEmployee = (id, employeeReqData, result)=>{
//     dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,salary=? WHERE id = ?", [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.phone,employeeReqData.salary, id], (err, res)=>{
//         if(err){
//             console.log('Error while updating the employee');
//             result(null, err);
//         }else{
//             console.log("Employee updated successfully");
//             result(null, res);
//         }
//     });
// }
 
// // delete employee
// Employee.deleteEmployee = (id, result)=>{
//     dbConn.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
//         if(err){
//             console.log('Error while deleting the employee');
//             result(null, err);
//         }else{
//             result(null, res);
//         }
//     })
//     // dbConn.query("UPDATE employees SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
//     //     if(err){
//     //         console.log('Error while deleting the employee');
//     //         result(null, err);
//     //     }else{
//     //         console.log("Employee deleted successfully");
//     //         result(null, res);
//     //     }
//     // });
// }
 
// module.exports = Employee;