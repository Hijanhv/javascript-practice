/*arrow functions are used to create a 
function that takes a parameter and returns a value*/

// arguments are not available in arrow functions,because
//  arrow functions do not have their own this context.

const sayHello = () => {
  console.log("Hello Janhavi!");
};
sayHello();

const add = (a, b) => {
  return a + b;
};
console.log(add(5, 10));

const addV2 = (a, b) => a + b; // single line arrow function
console.log(addV2(15, 10));

//2. Arguments is not available in arrow functions

// Arrow functions do not have their own 'arguments' object.
// However, you can use the rest parameter to achieve similar functionality.

const sumAll = (...args) => {
  return args.reduce((sum, current) => sum + current, 0);
};
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
