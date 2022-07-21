// Write your solution in this file!
const employee = {}
employee.name = []
employee.streetAddress = []
console.log(employee)
console.log('TEST')
function updateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = {...value}
    return employee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    employee[key.delete]
    return employee
}