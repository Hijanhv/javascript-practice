//logical operators

// AND operator - returns true if both operands are true (&&)
// all conditions must be true

const age = 22;
const hasDrivingLicense = true;

if (age >= 18 && hasDrivingLicense) {
  console.log("You can drive a car.");
}

// OR operator - returns true if at least one operand is true (||)
// at least one condition must be true

const hasCar = false;
const hasBike = true;

if (hasCar || hasBike) {
  console.log("You have a vehicle.");
}

// NOT operator - reverses the boolean value of the operand (!)
// if true, it becomes false and vice versa

const isRaining = false;
const isSunny = true;
const isGoodWeather = !isRaining && isSunny; // true

console.log(isGoodWeather); // true

//=	Assignment	Assigns value to a variable
//==	Loose Equality	Compares values with type conversion
//===	Strict Equality	Compares values & types (no conversion)
//&	Bitwise AND	Works at the binary level
//&&	Logical AND	Checks if both conditions are true
