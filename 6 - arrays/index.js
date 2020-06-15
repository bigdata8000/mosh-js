// adding elements in array

const numbers = [3, 4];

numbers.push(5, 6); // adds() to END of array
console.log(numbers); // 3, 4, 5, 6

numbers.unshift(1, 2); // add() at START of array, everything move to the right.
console.log(numbers); // 1,2,3,4,5,6

numbers.splice(2, 0, "a", "b"); // add at position, dont delete anything.
console.log(numbers); // 1, 2, 'a', 'b', 3, 4, 5, 6

/*
  finding elements
*/

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course = courses.find(function (course) {
  return course.name === "a";
});

console.log(course);

/*
  iterating an array
*/

const numbers = [1, 2, 3, 4];

// let z of array name
for (let z of numbers) console.log(z);

// array name forEach
numbers.forEach(function (z) {
  console.log(z);
});

/*
  sorting array
*/

const num2 = [5, 2, 3, 4, 1];
num2.sort();
console.log(num2);

num2.reverse();
console.log(num2);

/*
  filter array
*/

const numbers = [1, -1, 2, 3, 4];

const filtered = numbers.filter(function (z) {
  return z >= 0;
});

console.log(filtered);

/*
  map array
*/

const numbers = [1, -1, 2, 3, 4];
const filtered = numbers.filter((n) => n >= 0);
const items = filtered.map((n) => "<li>" + n + "</li>");
const html = "<ul>" + items.join("") + "</ul>";

console.log(html);
