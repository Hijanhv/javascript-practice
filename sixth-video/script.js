//loops

//for loop-> if we know the number of iterations

for (let i = 1; i <= 10; i++) {
  console.log("janvi" + i);
}

/*  you                                     house
 */

//while loop-> if we don't know the number of iterations but we know the condition

let ip = 0;
let house = 20;
while (ip != house) {
  ip = ip + 1;
  console.log("stepTaken " + ip);
}

//do while loop-> first execute the code and then check the condition

//easy way to write do while loop
let count = 1; // Initialize the count variable
do {
  console.log("Count is: " + count);
  count++;
} while (count <= 5);
