/** @type {Employee[]} */
const employeeList = [
  { name: "John", position: "Manager", salary: 50000 },
  { name: "John2", position: "Salesperson", salary: 70000 },
];
const tableBody = document.querySelector("#employee-table tbody");

function createEmployeeRows() {
  const employeeRows = employeeList.map((employee) => {
    const newRow = document.createElement("tr");
    for (const property in employee) {
      const newCell = document.createElement("td");
      newCell.textContent = employee[property];
      newRow.appendChild(newCell);
    }
    return newRow;
  });
  tableBody.replaceChildren(...employeeRows);
}
createEmployeeRows();
/**
 * @typedef Employee
 * @property {string}name - NAME OF EMPLOYEE
 * @property {string}position  - Employee postion in the company
 * @property {number} salary - Employee current salary
 *
 */

// // 1. Prompt the user for employee data as a comma separated string
// // 2. Create an object of type employee for this data
// // 3.Put the object  created in step 2 into our list of employees
// // alert the user that employee was added succesful

// // gloal variable that can be update to stop the loop[TO DO TONIGHT]
// let userIsFinished = false;
// while (!userIsFinished) {
//   const newEmployeeData = prompt(
//     "Enter Your name, Position and salary separate by commas:",
//     "John Wayne, Sales, 65000"
//   );
//   if (newEmployeeData === null) {
//     userIsFinished = true;
//     continue;
//   }

//   //console.log(newEmployeeData);
//   // split employee data by commas
//   const employeeDataArray = newEmployeeData.split(",");
//   //console.log(employeeDataArray);
//   /**WE HAVE MOVED LINE 30 TO 35 INTO addEmplooyee function */
//   // const newEmployee = {};

//   // newEmployee.name = employeeDataArray[0].trim();
//   // newEmployee.position = employeeDataArray[1].trim();
//   // newEmployee.salary = Number(employeeDataArray[2].trim());
//   // We could do the above three lines into one line below
//   // const newEmployee = {name:employeeDataArray[0], position:employeeDataArray[1],
//   //     salary: employeeDataArray[2]
//   // }

//   //console.log(newEmployee);
//   // call the function below to create the new imployer
//   const newEmployee = createEmployee(employeeDataArray);
//   employeeList.push(newEmployee);
// }
//console.log(employeeList);
/**
 *
 * @param {string[]} employeeDataArr - with position name and salary
 * @returns@type Employee
 */
function createEmployee(employeeDataArr) {
  const newEmployee = {};
  newEmployee.name = employeeDataArr[0].trim();
  newEmployee.position = employeeDataArr[1].trim();
  newEmployee.salary = Number(employeeDataArr[2].trim());
  return newEmployee;
}

console.log(employeeList);
