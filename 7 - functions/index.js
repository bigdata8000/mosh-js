// function declaration
function walk() {
  console.log("walk");
}

// anonymous function EXPRESSION
let run = function () {
  console.log("run");
};

run();

/*
  hoisting, function are moved to the TOP
  CAN be called before defined.
*/

/*
  arguments
*/

function sum(a, b) {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 10));

/*
  ... rest operator, with discount example
*/

function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));

/*
  default parameters
*/

function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 3.5, 5));

// only provide the principle amount, will use default: rate and years
console.log(interest(10000));

/*
  getters and setters
*/

const person = {
  firstname: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${person.firstname} ${person.lastName}`;
  },
};

//person.fullName = 'John Smith';

console.log(person.fullName);
