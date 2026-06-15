console.log("Employee Management System Started");
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `${this.name} manages the ${this.department} department with a team of ${this.teamSize} employees.`;
  }
}
let employeeOne = new Employee("Sohil Desai", "Sales");
let employeeTwo = new Employee("Olivia Martinez", "Information Technology");
let managerOne = new Manager("Ethan Wilson", "Operations", 6);
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    for (let employee of this.employees) {
      console.log(employee.describe());
    }
  }
}
