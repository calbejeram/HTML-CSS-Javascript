// Sample variables
let person = "John Doe";
let age = 30;
let birthPlace = "USA";
var hasLicense = true;

// console.log(person);
// alert(person)

// document.write("<h2>Name: " + person + "</h2>");
// document.write("<h2>Age: " + age + "</h2>");
// document.write("<h2>Birth Place: " + birthPlace + "</h2>");
// document.write(`My name is ${person}, birth place is ${birthPlace}, and my age is ${age}.`); //Template literal or backticks - for displaying the variable is called interpolation. start with dollar sign.
// console.log(typeof person);
// console.log(typeof age);
// console.log(typeof hasLicense);

// Sample Operators
// var num1 = 20;
// var num2 = 10;
// var sum = num1 + num2;

// document.write(`<h2>The sum of ${num1} and ${num2} is ${sum}.</h2>`)

// function sum(num1, num2) {
//     var total = num1 + num2;
//     document.write(`<h2>The sum of ${num1} and ${num2} is ${total}.</h2>`)
// }

// sum(13, 25);

// function userInput() {
//     var num1 = Number(prompt("Enter the first number: "));
//     var num2 = Number(prompt("Enter the second number: "));
//     var sum = num1 + num2;

//     document.write(`The sum of ${num1} and ${num2} is ${sum}.`);
// }

// userInput();

// let date = new Date();
// let greetings;
// let name = prompt("What is your name?");

// let hourOfDay = date.getHours();

// if (hourOfDay < 12) {
//     greetings = `Goodmorning ${name}`;
// } else if (hourOfDay >= 12) {
//     greetings = `Goodafternoon ${name}`;
// } else {
//     greetings = `Goodevening ${name}`;
// }

// document.write(`${greetings}.`);

let userInput = prompt("Enter month: ")

switch (userInput) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        days = 31;
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        days = 30;
        break;
    case 'February':
        days = 28;
        break;
    default:
        days = `none, since the input is invalid`
}

alert(`The days of the month of ${userInput} is ${days}`)
