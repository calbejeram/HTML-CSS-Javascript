// Objects by literal

const person = {
    firstName: "Juan",
    lastName: "Cruz",
    age: "20",
    gender: "M"
}

let para = document.getElementById("demo");

para.innerText = `${person.firstName} is ${person.age} years old`;

person2.firstName = "Jose";
person2.lastNmae = "Rizal";
person2.age = 30;

const person3 = new Object();

person3.firstName = "Maria";
person3.lastName = "Clara";
person3.age = 21;


// Object constructor

function person1(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.ages
}