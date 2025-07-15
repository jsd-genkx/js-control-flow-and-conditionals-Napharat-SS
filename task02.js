"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

// const userInput = "42";
// const userInput = "hello";
// const userInput = 10;
// const userInput = null;
const userInput = NaN;
console.log(typeof NaN);
// Try changing to "hello", 10, null, NaN

// if (!isNaN(Number(userInput))) {
if (typeof userInput === "number" && !isNaN(userInput)) {
  console.log("It is a number.");
} else {
  console.log("It is NOT a number.");
}