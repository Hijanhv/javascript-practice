//if else
const age = 20;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a child");
}

const marks = 85;
if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 80) {
  console.log("B grade");
} else if (marks >= 70) {
  console.log("C grade");
} else if (marks >= 60) {
  console.log("D grade");
} else if (marks >= 50) {
  console.log("E grade");
} else {
  console.log("F grade");
}

//ternary operator

const rank = 16;
let result = rank <= 10 ? "average" : "below average";
console.log(result);

//switch case
const day = 3;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

//if you don't use break, it will execute all the cases after the matching case

let a = 2;
let b = 3;
let operator = "+";
switch (operator) {
  case "+":
    console.log(a + b);
  case "-":
    console.log(a - b);
  case "*":
    console.log(a * b);
  case "/":
    console.log(a / b);
  default:
    console.log("Invalid operator");
}

//loops

//for loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//while loop

let p = 0;
while (p < 5) {
  console.log(p);
  p++;
}

//do while loop

let d = 0;
do {
  console.log(d);
  d++;
} while (d < 5);

//break statement

for (let y = 0; y < 5; y++) {
  if (y === 3) {
    break;
  }
  console.log(y);
}

//continue statement

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

//nested loops

for (let i = 0; i < 3; i++) {
  for (let k = 0; k < 3; k++) {
    console.log(i, k);
  }
}

//looping through an array

const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//for of loop

for (let color of colors) {
  console.log(color);
}

//for in loop

const person = {
  name: "John",
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}

//while loop

let t = 0;
while (t < 5) {
  console.log(t);
  t++;
}

//do while loop

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
