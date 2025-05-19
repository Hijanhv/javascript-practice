//function statement Aka function declaration
function greet() {
  console.log("Hello, World!");
}

//function expression
var b = function (param1, param2) {
  console.log("b called");
};
// Define function a
function a() {
  console.log("a called");
}

a();
b();

// Define function xyz
function xyz() {
  console.log("xyz called");
}

xyz();

//anonymous function is a function without a name. it is often used as a callback function or
//  as an argument to another function. Anonymous functions are typically
//  defined using function expressions,
//  and they can be assigned to variables or passed as arguments to other functions.
var anonymousFunction = function () {
  console.log("This is an anonymous function");
};

//named function expression is a function that has a name
//  and is defined using a function expression.
var namedFunctionExpression = function namedFunction() {
  console.log("This is a named function expression");
};

//difference between parameter and argument is that
//  parameter is a variable in the declaration of the function
//  and argument is the actual value that is passed to the function when it is called
//function with parameters
function add(a, b) {
  return a + b;
}

//first class function is a function that can be treated like any other variable
//  in a programming language. This means that functions
//  can be passed as arguments to other functions,
//  returned from other functions, and assigned to variables.
// In JavaScript, functions are first-class citizens,
//  which means that they can be treated like any other object.

//arrow function is a shorter syntax for writing function expressions
//  and it is often used in functional programming.
// Arrow functions are anonymous functions
//  and they do not have their own this value.
// Arrow functions are often used as callbacks
//  and they are often used in functional programming.
// Arrow functions are defined using the => syntax
const addArrow = (a, b) => {
  return a + b;
};
