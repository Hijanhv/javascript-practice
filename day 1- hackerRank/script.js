// 🟢 Question:
// Write a JavaScript program that takes an array of numbers
// and prints all the even numbers using one loop,
// and all the odd numbers using another loop.

// 🧠 Tip: Use the modulus operator (%) to check if a number is even or odd
// Even numbers have no remainder when divided by 2: num % 2 === 0
// Odd numbers do have a remainder: num % 2 !== 0

// ✅ Example input:
let numbers = [10, 15, 22, 33, 40, 55];

// 🔁 TODO: Loop through the array and print EVEN numbers only
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log("Even: " + numbers[i]);
  }
}

// 🔁 TODO: Loop through the array again and print ODD numbers only
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log("Odd: " + numbers[i]);
  }
}

// ✅ Expected Output:
// Even: 10
// Even: 22
// Even: 40
// Odd: 15
// Odd: 33
// Odd: 55
