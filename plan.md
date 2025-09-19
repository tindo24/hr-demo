FEATURES/SPEC
ADD EMPLOYEE

user story:
as a user of this app i open the webpage and I see a prompt window that tell me to add employee. it first asks for the employee name, position and salary. After I put this in , I see an alert that tells me the employee was added to the system succesful. (note to developer- we will also see the updated list of all the employees in the console)

DATA:
- list of employees- we add to this list LIST - array
 - what does an employee look like ? OBJECT - an employee object which sill have name, salary and postion
PROGRAM FLOW:
We want to allow the user to keep adding employees- WHILE loop because we don't know how many employees were gonna add
    each iteration ( step in the loop):
        1 prompt user for employees name - well start with a single prompt aksing for teh employee data in a comma separated list. (e.g "Phlip,Accountant, 7000") this will be stored in a variable
create an object with the shape described above with employee data 
the we will push this into our list(array)
alert the user that the employee was added succesful 

