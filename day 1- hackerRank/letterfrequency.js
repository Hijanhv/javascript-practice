// 🟢 Question:
// Write a JavaScript program that takes a string and counts how many times each letter appears.
// Print the frequency of each letter using a loop.

// 🧠 Hints:
// - Use an object to store letter counts
// - Convert the string to lowercase to treat 'A' and 'a' the same
// - Skip spaces or special characters

// ✅ Example input:
let input = "Hello World";

// 🔁 TODO: Count how many times each letter appears (ignore spaces)
let frequency = {};

freq;

for (let i = 0; i < input.length; i++) {
  let char = input[i].toLowerCase();

  // TODO: Skip if not a letter
  if (char >= "a" && char <= "z") {
  }
}

// 🔁 TODO: Print the result
for (let key in frequency) {
  console.log(`'${key}' appears ${frequency[key]} times`);
}

// 🔁 Count how many times each letter appears (ignore spaces)
for (let i = 0; i < input.length; i++) {
  let char = input[i].toLowerCase();

  // Skip if not a letter
  if (char >= "a" && char <= "z") {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
}

// 🔁 Print the result
for (let key in frequency) {
  console.log(`'${key}' appears ${frequency[key]} times`);
}
