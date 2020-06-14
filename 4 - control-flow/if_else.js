/*
  Hour
  If hour is between 6am and 12pm: Good Morning.
  If it is between 12pm and 6pm: Good afternoon.
  Otherwise: Good evening.
*/

let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else console.log("Good evening");

/*
  switch ... case
*/

let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown Role");
}

/*
  For loops
*/

for (let i = 0; i < 5; i++) {
  console.log("Hello World " + [i]);
}

for (let i = 0; i < 5; i++) {
  console.log("Hello World ", i);
}

for (let i = 0; i < 8; i++) {
  console.log(i);
}

// show me only odd numbers between 1-5 in descending order.
for (let i = 6; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}

// let of
const colors = ["red", "green", "blue"];

for (let color of colors) console.log(color);

// exercise: max of 2 numbers

let p = 10;
let q = 15;

function maxNum(p, q) {
  if (p > q) {
    console.log(p);
  } else console.log(q);
}

maxNum(6, 15);
