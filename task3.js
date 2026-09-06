// // //task1-Variables

// // //Printing all values
// // const Name="Nirmal";
// // let Age=23;
// // var City="Theni";
// // var College="Marymatha";

// // console.log("Name:",Name);
// // console.log("Age:",Age);
// // console.log("City:",City);
// // console.log("College:",College);

// // //Changing var values

// // City="Madurai";
// // College="TKS";

// // console.log("Changed City:", City);
// // console.log("Changed College:",College);

// // //Changing let value

// // Age=25;
// // console.log("changer let value:",Age)

// // //Trying to change const value

// // // Name="Surya" //Uncaught typeError:Assingment to constant variable

// // // const Name="jai"; //Syntax Error identifer name already declared
// // // let Age=26; //Syntax Error identifer name already declared
// // var City="Coimabtore";
// // var College="NS College"

// // console.log("Redeclared;",City,College);

// // //task2-Printing statement

// // var a=55;


// // //Console.log()

// // console.log(a);

// // //alert()

// // alert(a);

// // //promt()

// // // var NAME = prompt("What is your name");
// // // console.log(NAME);

// //document.write()

// // document.writeln(a)

// //task3-User Details

// // const name = prompt("What is you name");
// // var age = prompt("What is you age");
// // var city = prompt("what is you city");
// // let qualification = prompt("your qualification")

// // console.log(name,age,city,qualification);

// //task4-data types

// // var subject = "Javascript"
// // var num=100;
// // let decnum=90.5;
// // let bool=true;
// // let bool2=false;
// // let un;
// // var none= null;

// // console.log(typeof subject); //String
// // console.log(typeof num);  //number
// // console.log(typeof decnum); //number
// // console.log(typeof bool); //boolean
// // console.log(typeof bool2); //boolean
// // console.log(typeof un); //undefiend
// // console.log(typeof none); //object 

// //Task5-Student array

// // let student=["Arun","priya","Kumar","divya"]

// // document.writeln(student[0]);
// // document.writeln(student[1]);
// // document.writeln(student[student.length-1]);
// // document.writeln(student.length);

// //Task6-Employee object*

// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     skills: ["HTML", "CSS", "JavaScript"],
//     isWorking: true,
//     qualification: ["BSc", "MSc"]
// };

// document.writeln(employee.name);
// document.writeln(employee.age);
// document.writeln(employee.role);
// document.writeln(employee.skills[0]);
// document.writeln(employee.qualification[employee.qualification.length-1]);
// document.writeln(employee.isWorking);


// //Task7-Calculator*

// let a = 20;
// let b = 5;

// document.writeln(a + b);
// document.writeln(a - b);
// document.writeln(a * b);
// document.writeln(a / b);
// document.writeln(a % b);
// document.writeln(a ** b);


// //Task8-Shopping bill*

// let Shirt = 999;
// let Pant = 1499;
// let Shoes = 1999;
// let Bag = 799;

// let total = Shirt + Pant + Shoes + Bag;
// document.writeln(total);


// //Task9-Increment & Decrement*

// //A
// let a1 = 10;
// let b1 = a1++;
// document.writeln(a1);
// document.writeln(b1);

// //B
// let a2 = 10;
// let b2 = ++a2;
// document.writeln(a2);
// document.writeln(b2);

// //C
// let a3 = 10;
// let b3 = a3--;
// document.writeln(a3);
// document.writeln(b3);

// //D
// let a4 = 10;
// let b4 = --a4;
// document.writeln(a4);
// document.writeln(b4);


// //Task10-Assignment operators*

// let num = 10;

// num += 5;
// document.writeln(num);

// num = 10;
// num -= 3;
// document.writeln(num);

// num = 10;
// num *= 2;
// document.writeln(num);

// num = 10;
// num /= 4;
// document.writeln(num);

// num = 10;
// num %= 3;
// document.writeln(num);

// num = 10;
// num **= 2;
// document.writeln(num);


// //Task11-Comparison output*

// document.writeln(10 > 5);
// document.writeln(10 < 5);
// document.writeln(10 >= 10);
// document.writeln(10 <= 9);

// document.writeln(5 == "5");
// document.writeln(5 === "5");

// document.writeln(10 != "10");
// document.writeln(10 !== "10");


// //Task12-AND*

// document.writeln(true && true);
// document.writeln(true && false);
// document.writeln(false && true);
// document.writeln(false && false);


// //Task13-OR*

// document.writeln(true || true);
// document.writeln(true || false);
// document.writeln(false || true);
// document.writeln(false || false);


// //Task14-NOT*

// document.writeln(!true);
// document.writeln(!false);
// document.writeln(!(5 > 10));
// document.writeln(!(10 > 5));


// //Task15-Combination*

// document.writeln(5 == "5" && !(5 === 5) || 6 > 7);
// document.writeln(10 > 5 && 8 < 12 || 4 === "4");
// document.writeln(7 === 7 && 10 != "10" || 5 >= 5);
// document.writeln(15 < 10 || 20 > 15 && 5 == "5");


// //Task16-Voting ternary*

// let age = 20;
// document.writeln(age >= 18 ? "Eligible to vote" : "Not eligible");


// //Task17-Password ternary*

// let password = true;
// document.writeln(password ? "Login successful" : "Wrong password");


// //Task18-User introduction*

// let name = "Naveen";
// let age1 = 25;
// let city = "Trichy";

// document.writeln("My name is " + name + ". I am " + age1 + " years old. I live in " + city + ".");

// document.writeln(`My name is ${name}. I am ${age1} years old. I live in ${city}.`);


// //Task19-String conversion*

// let s1 = String(100);
// let s2 = String(true);
// let s3 = String(undefined);
// let s4 = String(null);
// let s5 = String([1,2]);

// document.writeln(s1, typeof s1);
// document.writeln(s2, typeof s2);
// document.writeln(s3, typeof s3);
// document.writeln(s4, typeof s4);
// document.writeln(s5, typeof s5);


// //Task20-Number conversion*

// document.writeln(Number());
// document.writeln(Number(""));
// document.writeln(Number("123"));
// document.writeln(Number("a1"));
// document.writeln(Number(true));
// document.writeln(Number(false));
// document.writeln(Number(undefined));
// document.writeln(Number(null));


// //Task21-Boolean conversion*

// document.writeln(Boolean());
// document.writeln(Boolean(""));
// document.writeln(Boolean("hello"));
// document.writeln(Boolean(123));
// document.writeln(Boolean(true));
// document.writeln(Boolean(false));
// document.writeln(Boolean(undefined));
// document.writeln(Boolean(null));
// document.writeln(Boolean([]));
// document.writeln(Boolean({}));


// //Task22-Voting eligibility*

// let ageInput = prompt("Enter age");
// if(ageInput >= 18){
//     document.writeln("You can vote");
// }else{
//     document.writeln("You can't vote");
// }


// //Task23-Positive or negative*

// let numInput = prompt("Enter number");

// if(numInput > 0){
//     document.writeln("Positive");
// }else if(numInput < 0){
//     document.writeln("Negative");
// }else{
//     document.writeln("Zero");
// }


// //Task24-Grade system*

// let marks = prompt("Enter marks");

// if(marks >= 90){
//     document.writeln("A Grade");
// }else if(marks >= 80){
//     document.writeln("B Grade");
// }else if(marks >= 70){
//     document.writeln("C Grade");
// }else if(marks >= 60){
//     document.writeln("D Grade");
// }else{
//     document.writeln("Fail");
// }


// //Task25-Nested if job eligibility*

// let ageJ = prompt("Enter age");
// let height = prompt("Enter height");
// let weight = prompt("Enter weight");

// if(ageJ >= 18){
//     if(height >= 160){
//         if(weight >= 60){
//             document.writeln("Congratulations! You are selected");
//         }else{
//             document.writeln("Weight not eligible");
//         }
//     }else{
//         document.writeln("Height not eligible");
//     }
// }else{
//     document.writeln("Age not eligible");
// }


// //Task26-Switch traffic light*

// let color = prompt("Enter color");

// switch(color){
//     case "red":
//         document.writeln("Stop");
//         break;
//     case "yellow":
//         document.writeln("Ready");
//         break;
//     case "green":
//         document.writeln("Go");
//         break;
// }


// //Task27-Switch day*

// let day = 1;

// switch(day){
//     case 1: document.writeln("Monday"); break;
//     case 2: document.writeln("Tuesday"); break;
//     case 3: document.writeln("Wednesday"); break;
//     case 4: document.writeln("Thursday"); break;
//     case 5: document.writeln("Friday"); break;
//     case 6: document.writeln("Saturday"); break;
//     case 7: document.writeln("Sunday"); break;
//     default: document.writeln("Invalid day");
// }


// //Task28-Student result system*

// let sname = prompt("Enter name");
// let sage = prompt("Enter age");
// let scity = prompt("Enter city");

// let tamil = Number(prompt("Tamil mark"));
// let english = Number(prompt("English mark"));
// let maths = Number(prompt("Maths mark"));

// let totalMarks = tamil + english + maths;
// let average = totalMarks / 3;

// let grade;

// if(average >= 90){
//     grade = "A";
// }else if(average >= 80){
//     grade = "B";
// }else if(average >= 70){
//     grade = "C";
// }else if(average >= 60){
//     grade = "D";
// }else{
//     grade = "Fail";
// }

// let voting = sage >= 18 ? "Eligible" : "Not Eligible";

// document.writeln(`Name: ${sname}`);
// document.writeln(`Age: ${sage}`);
// document.writeln(`City: ${scity}`);
// document.writeln(`Total: ${totalMarks}`);
// document.writeln(`Average: ${average}`);
// document.writeln(`Grade: ${grade}`);
// document.writeln(`Voting: ${voting}`);









