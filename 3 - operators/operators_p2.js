// strict equality
console.log(1 === 1); // true
console.log("1" === 1); // false, diff type

// lose equalty
console.log(1 == 1); //  true
console.log("1" == 1); // true

/*
  ternary operators
*/

// if customer has more than 100 points = 'gold' customer, if not 'silver' customer.

let points = 110;
let type = points > 100 ? "gold" : "silver";

console.log(`You are a ${type} customer.`);

/*
  logical operators

  AND &&
  OR  ||
  NOT !
*/

let highIncome = true;
let goodCreditScore = false;

let eligibleForLoanV1 = highIncome && goodCreditScore; // AND
let eligibleForLoanV2 = highIncome || goodCreditScore; // OR

console.log(eligibleForLoanV1); // false
console.log(eligibleForLoanV2); // true

/*
  exercise: swapping variables
*/

let a = "red";
let b = "blue";

let c = a; // c=red | a='' | b=blue
let a = b; // a=blue | b=blue | c=red
let b = c; // a=blue | b=red | c=red

console.log(a);
console.log(b);
