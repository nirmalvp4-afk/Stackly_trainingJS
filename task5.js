// // Variables & Data Types

// // Q1: What is the difference between var, let, and const?

// // var:
// // Function scoped, can be redeclared and reassigned.

// // let:
// // Block scoped, cannot be redeclared in the same scope,
// // but can be reassigned.

// // const:
// // Block scoped, cannot be redeclared or reassigned.


// // Q2: Can you re-declare a variable with var?
// // What about let and const?

// // var can be redeclared.
// var name = "Arun";
// var name = "Kumar";

// console.log(name);

// // let cannot be redeclared in the same scope.
// // const cannot be redeclared in the same scope.


// // Q3: What is the output?

// var x1 = 5;
// let y1 = 10;
// const z1 = 15;

// x1 = 20;
// y1 = 25;

// // z1 = 30;
// // Error: Assignment to constant variable.

// // console.log(x1, y1, z1);

// // Output:
// // TypeError: Assignment to constant variable.


// // Q4: What is the difference between declaring
// // and initializing a variable?

// // Declaration:
// // Creating a variable without assigning a value.

// let a;

// // Initialization:
// // Assigning a value to a variable.

// let b = 10;


// // Q5: What will be the output?

// let value;

// console.log(value);

// // Output:
// // undefined


// // Q6: What is hoisting? Give an example.

// // Hoisting is JavaScript's behavior of moving
// // declarations to the top of their scope.

// console.log(number);

// var number = 10;

// // Output:
// // undefined


// // Q7: What is the difference between null and undefined?

// // undefined:
// // A variable is declared but has no assigned value.

// // null:
// // Represents an intentional empty value.

// let firstValue;
// let secondValue = null;

// console.log(firstValue);
// console.log(secondValue);

// // Output:
// // undefined
// // null


// // Q8: What will be the output?

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof []);
// console.log(typeof {});

// // Output:
// // object
// // undefined
// // object
// // object



// // Operators

// // Q9: What is the difference between == and ===?

// // == checks values and performs type conversion.

// console.log(5 == "5");

// // Output:
// // true

// // === checks both value and data type.

// console.log(5 === "5");

// // Output:
// // false


// // Q10: What is the difference between ++i and i++?

// // ++i is pre-increment.
// // It increases the value before using it.

// let i = 5;

// console.log(++i);

// // Output:
// // 6

// // i++ is post-increment.
// // It uses the value first and then increases it.

// let j = 5;

// console.log(j++);

// // Output:
// // 5

// console.log(j);

// // Output:
// // 6


// // Q11: What will be the output?

// let x2 = 10;
// let y2 = "5";

// console.log(x2 + y2);
// console.log(x2 - y2);
// console.log(x2 * y2);
// console.log(x2 / y2);

// // Output:
// // 105
// // 5
// // 50
// // 2


// // Q12: What are logical operators?
// // Explain with examples.

// // && means AND.
// // Both conditions must be true.

// console.log(10 > 5 && 20 > 10);

// // Output:
// // true

// // || means OR.
// // At least one condition must be true.

// console.log(10 > 20 || 20 > 10);

// // Output:
// // true

// // ! means NOT.
// // It reverses the result.

// console.log(!(10 > 5));

// // Output:
// // false


// // Q13: What will be the output?

// console.log(5 > 3 && 10 > 5);
// console.log(5 > 10 || 10 > 5);
// console.log(!(5 > 3));

// // Output:
// // true
// // true
// // false


// // Q14: What is the ternary operator?
// // Give an example.

// // Ternary operator is a short way to write if-else.

// // Syntax:
// // condition ? valueIfTrue : valueIfFalse

// let age1 = 20;

// let status = age1 >= 18 ? "Adult" : "Minor";

// console.log(status);

// // Output:
// // Adult



// // Type Casting

// // Q15: What is the difference between implicit
// // and explicit type casting?

// // Implicit type casting:
// // JavaScript automatically converts the data type.

// let result1 = "10" - 5;

// console.log(result1);

// // Output:
// // 5

// // Explicit type casting:
// // Programmer manually converts the data type.

// let numberValue = Number("100");

// console.log(numberValue);

// // Output:
// // 100


// // Q16: What will be the output?

// console.log(Number("123"));
// console.log(Number("hello"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Boolean(0));
// console.log(Boolean("hello"));

// // Output:
// // 123
// // NaN
// // 1
// // 0
// // false
// // true


// // Q17: What is NaN? Give an example.

// // NaN means "Not a Number".
// // It occurs when a value cannot be converted into a valid number.

// let invalidNumber = Number("hello");

// console.log(invalidNumber);

// // Output:
// // NaN



// // Conditional Statements

// // Q18: What is the difference between if-else and switch?

// // if-else:
// // Used for conditions and ranges.

// let marks = 75;

// if (marks >= 50) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

// // switch:
// // Used to compare one value with multiple fixed cases.

// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     default:
//         console.log("Invalid day");
// }


// // Q19: What will be the output?

// let age2 = 20;

// if (age2 >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// // Output:
// // Adult


// // Q20: What is nested if? Give an example.

// // A nested if is an if statement inside another if statement.

// let personAge = 20;
// let hasID = true;

// if (personAge >= 18) {

//     if (hasID) {
//         console.log("Adult with ID");
//     }
// }


// // Q21: Write a program to check if a number
// // is even or odd using ternary operator.

// let number = 7;

// let result2 = number % 2 === 0 ? "Even" : "Odd";

// console.log(result2);

// // Output:
// // Odd



// // Loops

// // Q22: What is the difference between while and do-while?

// // while:
// // Condition is checked before executing the loop.

// // do-while:
// // Condition is checked after executing the loop.
// // Therefore, do-while executes at least once.


// // while example

// let count = 1;

// while (count <= 3) {
//     console.log(count);
//     count++;
// }


// // do-while example

// let count2 = 1;

// do {
//     console.log(count2);
//     count2++;
// } while (count2 <= 3);


// // Q23: What will be the output?

// for (let k = 1; k <= 5; k++) {
//     console.log(k);
// }

// // Output:
// // 1
// // 2
// // 3
// // 4
// // 5


// // Q24: What is the difference between for-of and for-in?

// // for-of:
// // Used to get values from an array.

// let fruits = ["Apple", "Banana", "Mango"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// // Output:
// // Apple
// // Banana
// // Mango


// // for-in:
// // Used to get indexes or keys.

// for (let index in fruits) {
//     console.log(index);
// }

// // Output:
// // 0
// // 1
// // 2


// // Q25: Write a program to find sum of numbers from 1 to 100.

// let sum = 0;

// for (let n = 1; n <= 100; n++) {
//     sum = sum + n;
// }

// console.log(sum);

// // Output:
// // 5050



// // Arrays

// // Q26: What is the difference between slice and splice?

// // slice():
// // Returns a portion of an array.
// // Does not change the original array.

// let numbers = [1, 2, 3, 4, 5];

// let sliced = numbers.slice(1, 4);

// console.log(sliced);

// // Output:
// // [2, 3, 4]


// // splice():
// // Adds, removes, or replaces elements.
// // Changes the original array.

// let values = [1, 2, 3, 4, 5];

// values.splice(1, 2);

// console.log(values);

// // Output:
// // [1, 4, 5]


// // Q27: What will be the output?

// let arr = [1, 2, 3];

// arr.push(4);
// arr.pop();
// arr.unshift(0);
// arr.shift();

// console.log(arr);

// // Output:
// // [1, 2, 3]



// // Functions

// // Q28: What is the difference between function declaration
// // and function expression?

// // Function declaration:

// function add(a, b) {
//     return a + b;
// }

// console.log(add(10, 20));

// // Function declaration can be called before its declaration
// // because function declarations are hoisted.


// // Function expression:

// let subtract = function(a, b) {
//     return a - b;
// };

// console.log(subtract(20, 10));

// // Function expression is stored inside a variable.


// // Q29: What is an arrow function?
// // Give an example.

// // Arrow function is a shorter way to write a function.
// // It uses the => symbol.

// let multiply = (a, b) => {
//     return a * b;
// };

// console.log(multiply(5, 4));

// // Output:
// // 20


// // Short arrow function:

// let square = number => number * number;

// console.log(square(5));

// // Output:
// // 25


// // Q30: What will be the output?

// function greet() {
//     return "Hello";
// }

// let message = greet();

// console.log(message);

// // Output:
// Hello