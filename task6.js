// // Task 1 - Student Result Analyzer

// function analyzeStudent(name, department, mark1, mark2, mark3, mark4, mark5) {
//     let total = mark1 + mark2 + mark3 + mark4 + mark5;
//     let average = total / 5;
//     let result;
//     let grade;

//     if (mark1 >= 50 && mark2 >= 50 && mark3 >= 50 && mark4 >= 50 && mark5 >= 50) {
//         result = "Pass";

//         if (average >= 90) {
//             grade = "A";
//         } else if (average >= 75) {
//             grade = "B";
//         } else if (average >= 60) {
//             grade = "C";
//         } else {
//             grade = "D";
//         }
//     } else {
//         result = "Fail";
//         grade = "Fail";
//     }

//     console.log("Name:", name);
//     console.log("Department:", department);
//     console.log("Total Marks:", total);
//     console.log("Average:", average);
//     console.log("Result:", result);
//     console.log("Grade:", grade);
// }

// analyzeStudent("Arun", "IT", 85, 90, 78, 88, 92);


// // Task 2 - Employee Salary Calculator

// let employee = {
//     name: "Arun",
//     role: "Developer",
//     salary: 45000,
//     experience: 2
// };

// function calculateSalary(employee) {
//     let basicSalary = employee.salary;
//     let bonus = 0;

//     if (employee.experience >= 5) {
//         bonus = basicSalary * 0.15;
//     } else if (employee.experience >= 2) {
//         bonus = basicSalary * 0.10;
//     }

//     let finalSalary = basicSalary + bonus;

//     console.log("Name:", employee.name);
//     console.log("Role:", employee.role);
//     console.log("Basic Salary:", basicSalary);
//     console.log("Bonus:", bonus);
//     console.log("Final Salary:", finalSalary);
// }

// calculateSalary(employee);


// // Task 3 - Product Filter System

// let products = [
//     { name: "Laptop", price: 55000, category: "electronics" },
//     { name: "Mouse", price: 800, category: "electronics" },
//     { name: "Shirt", price: 1200, category: "fashion" },
//     { name: "Shoes", price: 2500, category: "fashion" },
//     { name: "Phone", price: 30000, category: "electronics" }
// ];

// let productsAbove2000 = products.filter(product => product.price > 2000);

// let electronics = products.filter(
//     product => product.category === "electronics"
// );

// let firstBelow1000 = products.find(
//     product => product.price < 1000
// );

// let totalProductPrice = products.reduce(
//     (total, product) => total + product.price,
//     0
// );

// let anyAbove50000 = products.some(
//     product => product.price > 50000
// );

// let everyAbove500 = products.every(
//     product => product.price > 500
// );

// console.log("Products above ₹2,000:", productsAbove2000);
// console.log("Electronics:", electronics);
// console.log("First product below ₹1,000:", firstBelow1000);
// console.log("Total price:", totalProductPrice);
// console.log("Any product above ₹50,000:", anyAbove50000);
// console.log("Every product above ₹500:", everyAbove500);


// // Task 4 - Employee Management

// let employees = [
//     { id: 101, name: "Kavin", role: "Frontend Developer", salary: 40000 },
//     { id: 102, name: "Arun", role: "Backend Developer", salary: 45000 },
//     { id: 103, name: "Priya", role: "UI Designer", salary: 50000 },
//     { id: 104, name: "Dinesh", role: "Tester", salary: 35000 },
//     { id: 105, name: "Karthi", role: "Full Stack Developer", salary: 60000 },
//     { id: 106, name: "Divya", role: "HR Manager", salary: 55000 }
// ];

// let employeeNames = employees.map(
//     employee => employee.name
// );

// let employeesAbove40000 = employees.filter(
//     employee => employee.salary > 40000
// );

// let employee103 = employees.find(
//     employee => employee.id === 103
// );

// let totalSalary = employees.reduce(
//     (total, employee) => total + employee.salary,
//     0
// );

// let highestPaidEmployee = employees.reduce(
//     (highest, employee) =>
//         employee.salary > highest.salary ? employee : highest
// );

// let sortedEmployees = [...employees].sort(
//     (a, b) => b.salary - a.salary
// );

// console.log("Employee names:", employeeNames);
// console.log("Employees above ₹40,000:", employeesAbove40000);
// console.log("Employee ID 103:", employee103);
// console.log("Total salary:", totalSalary);
// console.log("Highest-paid employee:", highestPaidEmployee);
// console.log("Sorted employees:", sortedEmployees);
// console.log("Names only:", employeeNames);


// // Task 5 - Shopping Cart

// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Mouse", price: 1000, quantity: 2 },
//     { name: "Keyboard", price: 2000, quantity: 1 }
// ];

// function calculateCart(cart) {

//     let itemTotals = cart.map(item => ({
//         name: item.name,
//         itemTotal: item.price * item.quantity
//     }));

//     let totalCartValue = cart.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//     );

//     let discount = 0;

//     if (totalCartValue > 50000) {
//         discount = totalCartValue * 0.10;
//     }

//     let finalPayable = totalCartValue - discount;

//     console.log("Item totals:", itemTotals);
//     console.log("Total cart value:", totalCartValue);
//     console.log("Discount:", discount);
//     console.log("Final payable:", finalPayable);
// }

// calculateCart(cart);


// // Task 6 - Student Search System

// let students = [
//     { name: "Arun", age: 21, mark: 85 },
//     { name: "Priya", age: 22, mark: 92 },
//     { name: "Karthi", age: 20, mark: 67 },
//     { name: "Dinesh", age: 23, mark: 45 }
// ];

// let allStudentNames = students.map(
//     student => student.name
// );

// let studentsAbove80 = students.filter(
//     student => student.mark > 80
// );

// let priya = students.find(
//     student => student.name === "Priya"
// );

// let averageMark = students.reduce(
//     (total, student) => total + student.mark,
//     0
// ) / students.length;

// let anyoneFailed = students.some(
//     student => student.mark < 50
// );

// let everyoneAbove40 = students.every(
//     student => student.mark > 40
// );

// let studentsLowToHigh = [...students].sort(
//     (a, b) => a.mark - b.mark
// );

// let studentsHighToLow = [...students].sort(
//     (a, b) => b.mark - a.mark
// );

// console.log("Student names:", allStudentNames);
// console.log("Students above 80:", studentsAbove80);
// console.log("Priya:", priya);
// console.log("Average mark:", averageMark);
// console.log("Anyone failed:", anyoneFailed);
// console.log("Everyone above 40:", everyoneAbove40);
// console.log("Marks low to high:", studentsLowToHigh);
// console.log("Marks high to low:", studentsHighToLow);


// // Task 7 - Array Transformation Challenge

// let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// let doubledNumbers = numbers.map(
//     number => number * 2
// );

// let evenNumbers = numbers.filter(
//     number => number % 2 === 0
// );

// let greaterThan15 = numbers.filter(
//     number => number > 15
// );

// let firstGreaterThan20 = numbers.find(
//     number => number > 20
// );

// let totalNumbers = numbers.reduce(
//     (total, number) => total + number,
//     0
// );

// let anyGreaterThan40 = numbers.some(
//     number => number > 40
// );

// let everyPositive = numbers.every(
//     number => number > 0
// );

// let numbersHighToLow = [...numbers].sort(
//     (a, b) => b - a
// );

// console.log("Original numbers:", numbers);
// console.log("Numbers × 2:", doubledNumbers);
// console.log("Even numbers:", evenNumbers);
// console.log("Numbers greater than 15:", greaterThan15);
// console.log("First number greater than 20:", firstGreaterThan20);
// console.log("Total:", totalNumbers);
// console.log("Any number greater than 40:", anyGreaterThan40);
// console.log("Every number positive:", everyPositive);
// console.log("Highest to lowest:", numbersHighToLow);


// // Task 8 - String Analyzer

// let sentence = prompt("Enter a sentence:");

// if (sentence !== null) {

//     console.log("Total characters:", sentence.length);

//     console.log("Uppercase:", sentence.toUpperCase());

//     console.log("Lowercase:", sentence.toLowerCase());

//     console.log(
//         "Contains JavaScript:",
//         sentence.includes("JavaScript")
//     );

//     console.log(
//         "First character:",
//         sentence.slice(0, 1)
//     );

//     console.log(
//         "Last character:",
//         sentence.slice(-1)
//     );

//     console.log(
//         "Number of words:",
//         sentence.trim().split(/\s+/).length
//     );

//     console.log(
//         "Replace JavaScript:",
//         sentence.replace("JavaScript", "Python")
//     );

//     console.log(
//         "Sentence array:",
//         sentence.split(" ")
//     );
// }


// // Final Mini Project - Employee Dashboard

// let dashboardEmployees = [
//     {
//         id: 101,
//         name: "Arun",
//         department: "IT",
//         salary: 45000,
//         experience: 2
//     },
//     {
//         id: 102,
//         name: "Priya",
//         department: "HR",
//         salary: 50000,
//         experience: 4
//     },
//     {
//         id: 103,
//         name: "Karthi",
//         department: "IT",
//         salary: 65000,
//         experience: 6
//     }
// ];


// // Employee List

// console.log("All employees:", dashboardEmployees);


// // Search

// let searchName = "Priya";

// let searchedEmployee = dashboardEmployees.find(
//     employee => employee.name === searchName
// );

// console.log("Search result:", searchedEmployee);


// // Department Filter

// let department = "IT";

// let departmentEmployees = dashboardEmployees.filter(
//     employee => employee.department === department
// );

// console.log("IT employees:", departmentEmployees);


// // Salary Filter

// let highSalaryEmployees = dashboardEmployees.filter(
//     employee => employee.salary > 50000
// );

// console.log(
//     "Employees above ₹50,000:",
//     highSalaryEmployees
// );


// // Total Company Salary

// let totalCompanySalary = dashboardEmployees.reduce(
//     (total, employee) => total + employee.salary,
//     0
// );

// console.log(
//     "Total company salary:",
//     totalCompanySalary
// );


// // Highest Salary

// let highestSalaryEmployee = dashboardEmployees.reduce(
//     (highest, employee) =>
//         employee.salary > highest.salary ? employee : highest
// );

// console.log(
//     "Highest-paid employee:",
//     highestSalaryEmployee
// );


// // Experience

// let experiencedEmployees = dashboardEmployees.filter(
//     employee => employee.experience > 3
// );

// console.log(
//     "Employees with more than 3 years:",
//     experiencedEmployees
// );


// // Sorting Low to High

// let salaryLowToHigh = [...dashboardEmployees].sort(
//     (a, b) => a.salary - b.salary
// );

// console.log(
//     "Salary low to high:",
//     salaryLowToHigh
// );


// // Sorting High to Low

// let salaryHighToLow = [...dashboardEmployees].sort(
//     (a, b) => b.salary - a.salary
// );

// console.log(
//     "Salary high to low:",
//     salaryHighToLow
// );


// // Statistics

// let averageSalary =
//     totalCompanySalary / dashboardEmployees.length;

// console.log(
//     "Total Employees:",
//     dashboardEmployees.length
// );

// console.log(
//     "Total Salary: ₹" + totalCompanySalary
// );

// console.log(
//     "Highest Salary: ₹" + highestSalaryEmployee.salary
// );

// console.log(
//     "Average Salary: ₹" + Math.round(averageSalary)
// );