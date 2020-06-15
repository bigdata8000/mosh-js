// factory functions

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle4);

// constructor functions, in proper case

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);

// date

const now = new Date();
const date1 = new Date("May 11 2018 09:00");

console.log(now);
console.log(date1);

// exercise:

const anyAddress = {
  street: "100 High Street",
  city: "London",
  zipcode: "EC1 9EX",
};
