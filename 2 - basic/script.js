console.log("Hello World 1234");

// this file can be run in node.
// In Terminal, in the dir where the file is, type:
// node index.js

/*
---------------------------------------
*/

let firstName = "Mary"; // string
let birthYear = 1999; // number
let age = 2020 - birthYear; // calculation
let isMarried = true; // boolean
let pets = ["cat", "dog", "bird", "fish"]; // arrays
const address = {
  street: "100 High Street",
  city: "London",
  country: "UK",
}; // object

console.log(`Hi ${firstName} you are ${age} years old.`);
console.log(`You have ${pets.length} pets, they are: ${pets}.`);
console.log(`Your first pet is: ${pets[0]}.`);
console.log(`You live in ${address.country}.`);

/*
---------------------------------------
*/

function greet(name, lastName) {
  // parameter
  return console.log(`Hello ${name} ${lastName}`);
}

greet("John", "Smith"); // argument, value supplied

/*
---------------------------------------
*/

let greet2 = (name, age) => {
  return console.log(`Hellooo ${name} you are ${age} years old.`);
};

greet2("Kelly", 18);

/*
---------------------------------------
*/

function mySquare(number) {
  return number * number;
}

console.log(mySquare(5));
