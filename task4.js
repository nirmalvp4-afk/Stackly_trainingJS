// //Task1-For loop

// for(let i=1; i<=10; i++){
//     document.writeln(i);
// }


// //Task2-Reverse number

// for(let i=10; i>=1; i--){
//     document.writeln(i);
// }


// //Task3-Even numbers

// for(let i=1; i<=20; i++){
//     if(i % 2 == 0){
//         document.writeln(i);
//     }
// }


// //Task4-Odd numbers

// for(let i=1; i<=20; i++){
//     if(i % 2 != 0){
//         document.writeln(i);
//     }
// }


// //Task5-Multiplication table

// let num = prompt("Enter number");

// for(let i=1; i<=10; i++){
//     document.writeln(num + " x " + i + " = " + (num*i));
// }


// //Task6-While countdown

// let i = 10;

// while(i >= 1){
//     document.writeln(i);
//     i--;
// }


// //Task7-Sum of numbers

// let sum = 0;
// let j = 1;

// while(j <= 10){
//     sum += j;
//     j++;
// }

// document.writeln(sum);


// //Task8-Do while print

// let k = 1;

// do{
//     document.writeln(k);
//     k++;
// }while(k <= 5);


// //Task9-Do while understanding

// let a = 10;

// do{
//     document.writeln(a);
//     a++;
// }while(a <= 5);

// //Output: 10
// //Reason: do...while executes at least once before checking condition


// //Task10-String characters

// let name = "javascript";

// for(let ch of name){
//     document.writeln(ch);
// }


// //Task11-Array values

// let fruits = ["apple","orange","banana","mango","grapes"];

// for(let f of fruits){
//     document.writeln(f);
// }


// //Task12-Student names

// let students = ["Arun","Priya","Kumar","Divya","Rahul"];

// for(let s of students){
//     document.writeln("Student: " + s);
// }


// //Task13-Employee object (for...in)

// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };

// for(let key in employee){
//     document.writeln(key + " " + employee[key]);
// }


// //Task14-Product object

// let product = {
//     productName: "Laptop",
//     price: 50000,
//     brand: "HP",
//     category: "Electronics",
//     stock: 10
// };

// for(let key in product){
//     document.writeln(key + " " + product[key]);
// }


// //Task15-Simple function

// function welcome(){
//     document.writeln("Welcome to JavaScript");
// }

// welcome();
// welcome();
// welcome();


// //Task16-Function with parameter

// function greet(name){
//     document.writeln("Hello " + name);
// }

// greet("Naveen");
// greet("Arun");
// greet("Priya");


// //Task17-Multiple parameters

// function student(name, age, department){
//     document.writeln(name + " " + age + " " + department);
// }

// student("Arun",25,"IT");
// student("Priya",24,"HR");
// student("Kumar",26,"Finance");


// //Task18-Addition return

// function add(a,b){
//     return a + b;
// }

// let result = add(10,20);
// document.writeln(result);


// //Task19-Salary

// function salary(amount){
//     return amount;
// }

// let sal = salary(50000);
// document.writeln(sal);


// //Task20-Bonus calculator

// function bonus(salary, bonusAmount){
//     return salary + bonusAmount;
// }

// document.writeln(bonus(50000,5000));


// //Task21-Default parameter

// function employee1(name, role="Developer"){
//     document.writeln(name + " " + role);
// }

// employee1("Arun");
// employee1("Priya","Designer");


// //Task22-Named function

// function square(number){
//     return number * number;
// }

// document.writeln(square(2));
// document.writeln(square(3));
// document.writeln(square(4));
// document.writeln(square(5));
// document.writeln(square(6));


// //Task23-Anonymous function

// let calculate = function(a,b){
//     return a + b;
// };

// document.writeln(calculate(10,20));


// //Task24-Arrow function

// let multiply = (a,b) => {
//     return a * b;
// };

// document.writeln(multiply(5,6));


// //Task25-Scope

// function test(){

//     if(true){
//         var a1 = 10;
//         let b1 = 20;
//         const c1 = 30;

//         document.writeln(a1);
//         document.writeln(b1);
//         document.writeln(c1);
//     }

//     document.writeln(a1); //works
//     //document.writeln(b1); //error
//     //document.writeln(c1); //error
// }

// test();


// //Task26-Hoisting var

// document.writeln(a2);
// var a2 = 10;
// //Output: undefined


// //Task27-Hoisting let

// //document.writeln(b2);
// let b2 = 20;
// //ReferenceError


// //Task28-Hoisting const

// //document.writeln(c2);
// const c2 = 30;
// //ReferenceError


// //Task29-IIFE

// (function(){
//     document.writeln("Welcome to JavaScript");
// })();

// (function(product,discount){
//     document.writeln(product + " has " + discount + " discount");
// })("Laptop","10%");


// //Task30-Callback

// function welcome1(){
//     document.writeln("Welcome");
// }

// function execute(callback){
//     callback();
// }

// execute(welcome1);
// //welcome1 is callback
// //execute is higher-order function


// //Task31-Generator

// function* cashback(){
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }

// let gen = cashback();

// for(let value of gen){
//     document.writeln(value);
// }


// //Task32-Employee management system

// let employees = [
//     {name:"Arun",age:25,department:"IT",role:"Developer",salary:40000},
//     {name:"Priya",age:24,department:"HR",role:"HR Executive",salary:35000}
// ];

// //1 for...of
// for(let emp of employees){
//     document.writeln(emp.name + " " + emp.role);
// }

// //2 for...in
// for(let emp of employees){
//     for(let key in emp){
//         document.writeln(key + " " + emp[key]);
//     }
// }

// //3 function
// function display(emp){
//     document.writeln(emp.name + " " + emp.department);
// }

// //4 parameter
// display(employees[0]);

// //5 return
// function getSalary(emp){
//     return emp.salary;
// }
// document.writeln(getSalary(employees[0]));

// //6 condition
// for(let emp of employees){
//     if(emp.salary >= 40000){
//         document.writeln(emp.name + " High salary");
//     }
// }

// //7 arrow function
// let incSalary = (sal) => sal + 1000;
// document.writeln(incSalary(40000));

// //8 generator
// function* benefits(){
//     yield "Medical Insurance";
//     yield "Transport";
//     yield "Food Allowance";
//     yield "Bonus";
// }

// for(let b of benefits()){
//     document.writeln(b);
// }