function findEmployeesRole(name) {
  const [firstName, lastName] = name.split(' ');
  const employee = employees.find(e => {
    if (e.firstName == firstName && e.lastName == lastName) {
      return true;
    }
  });
  
  if (!employee) {
    return "Does not work here!";
  }
  
  return employee.role;
}