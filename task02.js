"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

// const userInput = "42";
// const userInput = "hello";
// const userInput = 10;
const userInput = NaN;
// Try changing to "hello", 10, null, NaN

// if (!isNaN(Number(userInput))) {
if (typeof userInput === 'number') {
  console.log("It's a number!");
} else {
  console.log("It's not a number.");
}