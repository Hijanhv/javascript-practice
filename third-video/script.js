//numbers

let num = 7;
let num2 = 8;
console.log(num + num2); // 15

//strings

let firstName = "John";
let secondName = "Doe";
console.log(firstName + " " + secondName); // John Doe

//booleans

let answer = true;
console.log(answer); // true

//undefined

let name;
console.log(name); // undefined

//null

let age = null;
console.log(age); // null

//arrays

let fruits = ["apple", "banana", "orange"];
console.log(fruits); // ["apple", "banana", "orange"]
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // orange

//objects

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};
console.log(person); // {firstName: "John", lastName: "Doe", age: 25}

//functions

function greet() {
  console.log("Hello World!");
}
greet(); // Hello World!

//typeof operator

console.log(typeof num); // number
console.log(typeof firstName); // string
console.log(typeof answer); // boolean
console.log(typeof name); // undefined
console.log(typeof age); // object
console.log(typeof fruits); // object
console.log(typeof person); // object
console.log(typeof greet); // function

//true - 1
//false - 0

let x = true;
let y = false;
console.log(x + y); // 1
console.log(x + 10); //11
console.log(y + 10); //10
