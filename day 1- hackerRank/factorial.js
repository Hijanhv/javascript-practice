function factorial(n) {
  console.log(`Starting factorial calculation for n = ${n}`);
  let result = 1;
  console.log(`Initial result = ${result}`);

  // loop factorial
  for (let i = 1; i <= n; i++) {
    console.log(`Iteration ${i}: result = ${result}, multiplying by ${i}`);
    result = result * i;
    console.log(`After iteration ${i}: result = ${result}`);
  }

  console.log(`Final factorial of ${n} = ${result}`);
  return result;
}

let n = 5;
console.log(`Calculating factorial of ${n}:`);
let output = factorial(n);
console.log(`Final output: ${output}`);
// 5
