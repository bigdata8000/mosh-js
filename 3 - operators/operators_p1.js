/*
  arithmetic operators
*/

let x = 10;
let y = 3;

console.log(x + y); // plus
console.log(x - y); // minus
console.log(x * y); // multiply
console.log(x / y); // divide
console.log(x % y); // modulus
console.log(x ** y); // power

/*
  increment and decrement
*/

console.log(++x); // increment by 1, ie 11
console.log(--x); // decrement by 1 ie 10

/*
  assignment operators
*/

let z = 100;

z = z + 5; // 105
z += 5; // same as above

z = z * 3; // 300
z *= 3; // same as above

/*
  comparison operator
*/

let num1 = 1;

// relational
console.log(num1 > 0); // true
console.log(num1 >= 1); // true
console.log(num1 < 1); // false
console.log(num1 <= 1); // true

// equality
console.log(num1 === 1); // true
console.log(num1 !== 1); // false
