// const emptyArr = [];

// const numArr = [10, 20, 30, 40, 50];

// const strArr = ["Study", "Eat", "Sleep"];

// const mixedArr = [
//   {
//     studentNumber: 1001,
//     nickName: "Anzarie",
//     techStack: ["html", "css", "javascript"],
//     attendedFlag: true,
//     greeting: function greet() {
//       console.log(`Hello ${this.nickName}`);
//     },
//   },
//   {
//     studentNumber: 1002,
//     nickName: "Annie",
//     techStack: ["html", "css", "javascript"],
//     attendedFlag: true,
//     greeting: function greet() {
//       console.log(`Hello ${this.nickName}`);
//     },
//   },
//   {
//     studentNumber: 1003,
//     nickName: "Vida",
//     techStack: ["html", "css", "javascript"],
//     attendedFlag: true,
//     greeting: function greet() {
//       console.log(`Hello ${this.nickName}`);
//     },
//   },
//   {
//     studentNumber: 1004,
//     nickName: "Jasper",
//     techStack: ["html", "css", "javascript"],
//     attendedFlag: true,
//     greeting: function greet() {
//       console.log(`Hello ${this.nickName}`);
//     },
//   },
// ];

// // Add item at the end
// mixedArr.push({
//   studentNumber: 1005,
//   nickName: "Elaine",
//   techStack: ["html", "css", "javascript"],
//   attendedFlag: false,
//   greeting: function greet() {
//     console.log(`Hello ${this.nickName}`);
//   },
// });

// // Add item at the beginning
// mixedArr.unshift({
//   studentNumber: 1000,
//   nickName: "Charlie",
//   techStack: ["html", "css", "javascript"],
//   attendedFlag: false,
//   greeting: function greet() {
//     console.log(`Hello ${this.nickName}`);
//   },
// });

// // Remove item from the end
// mixedArr.pop();

// // Remove item from the beginning
// mixedArr.shift();

// // Update, Delete, and/or Add items in the array
// // <starting index number>, <delete count>, <optional item/s to be added>
// strArr.splice(3, 0, "Repeat");
// strArr.splice(0, 3, "Live", "Die");

// document.getElementById("p1").innerText = numArr.at(2);
// document.getElementById("p2").innerText = strArr;
// document.getElementById("p3").innerText = mixedArr.at(-1).nickName;
// document.getElementById("p4").innerText = mixedArr.at(0).nickName;

// console.log(mixedArr);
// console.log(strArr);

// let vegetables = ["Garlic", "Carrot", "Tomato", "Broccoli"];

// vegetables.splice(1, 2);

// document.getElementById("p5").innerText = vegetables;

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[0][2]);

// const studentData = [
//   ["Josiah", 89],
//   ["Anzarie", 93],
//   ["Michael", 87],
//   ["Nikko", 91],
//   ["Kenneth", 85],
// ];

// console.log(studentData[2][1]);

// studentData[0].push(87.5);
// console.log(studentData);

// let jsIsFun = ["JavaScript", "is", "fun!"];

// // Joins an array of items using a defined separator. Does not mutate the original array.
// document.getElementById("p6").innerText = jsIsFun.join(" ");

// const cities1 = ["Quezon", "San Juan", "Pasig", "Makati", "Taguig"];
// // Sort items in ascending order, by default
// // console.log(cities1.sort());

// const cities2 = ["Quezon", "San Juan", "Pasig", "Makati", "Taguig"];
// // Reverse the order of items in the array
// // console.log(cities2.reverse());

// const cities3 = ["Quezon", "San Juan", "Pasig", "Makati", "Taguig"];
// // When combined together, they can sort the items in descending order
// // console.log(cities3.sort().reverse());

// const cities4 = ["Taguig", "Quezon City", "Pasig City", "Makati", "Las Piñas"];

// const sortedCitiesByLength = cities4.sort((elem1, elem2) => {
//   return elem1.length - elem2.length;
// });

// console.log(sortedCitiesByLength);


// Using for loop
// const numbersArray = [10, 20, 30, 40, 50, 60];
// total = 0;

// for(let i=0; i < numbersArray.length; i++) {
//     total += numbersArray[i];
// }
// console.log(total);


// Using forEach loop

// const numbersArr = [10, 20, 30, 40, 50, 60];
// total = 0;

// function sumArr(numbers) {
//     total += numbers;
// }

// numbersArr.forEach(sumArr);

// console.log(`Total: ${total}`)


// map method is used for creating an array from an existing one, applying a function to each one of the elements.
// syntax: array.map(function callback(element, index, array) {});

// let numArray = [1, 2, 3, 4];

// let doubled = numArray.map((element) => element * 2);

// console.log(doubled);

// let set2 = [1, 9, 64];

// let squared = numArray.map((element) => Math.sqrt(element));

// console.log(squared);

let kodeGoStudents = [
    {
        id:100,
        name:'Jeram',
        salary: 10000,
        bonus: 1000,
        tax: 2000
    },
    {
        id:120,
        name:'John',
        grade:85,
        salary: 20000,
        bonus: 2000,
        tax: 4000
    },
    {
        id:150,
        name:'Alex',
        grade:77,
        salary: 30000,
        bonus: 3000,
        tax: 6000
    },
    {
        id:190,
        name:'Doe',
        grade:81,
        salary: 40000,
        bonus: 4000,
        tax: 8000
    }
]


// kodeGoStudents.forEach(element => kodeGoStudents_id.push(element.id));
// let kodeGoStudents_id = kodeGoStudents.map(element => element.id);
// console.log(kodeGoStudents_id)


// let getSalary = (student) => {
//     let currentStudent = {};

//     currentStudent.id = student.id;
//     currentStudent.name = student.name;
//     currentStudent_netSalary = (student.salary + student.bonus) - student.tax;

//     return currentStudent;
// }

// let kodeGoStudents_netSalary = kodeGoStudents.map(getSalary);

// console.log(kodeGoStudents_netSalary);


// FILTER METHOD RETURNS NEW ARRAY WITH AN ELEMENT WHO PASS THE CONDITION

let numsArr = [1, 2, 3, 4];

let evenNumber = numsArr.filter(element => element % 2 === 0);

console.log()
