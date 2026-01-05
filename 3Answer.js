//3. Write a function updateEmployeeDetails that takes an object representing an employee’s details and updates their role while maintaining the other properties using the spread operator.Example Input: const employee = {name: ‘John, role: ‘Developer’, age: 28, location: ‘IN’}

function updateEmployeeDetails(employee, newRole) {
    return {
        ...employee,
        role: newRole
    }
}
const employee = {
    name: "John",
    role: "Developer",
    age: 28,
    location: "IN"
}

const updatedEmployee = updateEmployeeDetails(employee,"Senior Developer")


    document.getElementById("result").innerHTML =
        "Name: " + updatedEmployee.name +"<br>"+
        "Role: " + updatedEmployee.role+" <br>"+
        "Age: " + updatedEmployee.age +"<br>"+
        "Location: " + updatedEmployee.location;