//functions -a block of code that performs a specific task

function sayHello() {
  console.log("Hello Janhavi!");
}
sayHello();

//parameters - a value that is passed into a function when it is called

function add(a, b) {
  console.log(a + b);
}

add(5, 10);

//arguments - the actual values that are passed into a function when it is called

function multiply(a, b) {
  console.log(a * b);
}

multiply(6, 7);

//return - a statement that ends a function and returns a value to the caller

function divide(a, b) {
  return a / b;
}

let result = divide(20, 4);
console.log("Hey user result is ", result);

//unlimited arguments - a function that can accept any number of arguments

function addNumbers() {
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans = ans + arguments[i];
  }
  return ans;
}
let sumResult = addNumbers(1, 2, 3, 4, 5);
console.log("Hey user result is ", sumResult);

//i++ - increment operator that increases the value of i by 1
//i-- - decrement operator that decreases the value of i by 1
//i += 1 - shorthand for i = i + 1
//i + 1 - adds 1 to the value of i
// i++ is not the same as i + 1,
//  because i++ increases the value of i by 1,
//  while i + 1 just adds 1 to the value of i without changing it.

//spread operator - a special operator that allows you to expand
//  an iterable (like an array) into individual elements

function addNumbersSpread(...args) {
  let ans = 0;
  for (let i = 0; i < args.length; i++) {
    ans = ans + args[i];
  }
  return ans;
}
let sumResultSpread = addNumbersSpread(11, 22, 33, 44, 55);
console.log("Hey user result is ", sumResultSpread);
