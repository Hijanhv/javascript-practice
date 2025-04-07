let person = {
  name: "Janhavi",
  age: 20,
  isStudent: true,
};

console.log(person.name); // Output: Janhavi
console.log(person.isStudent); // Output: true

person["city"] = "Pune"; // Adding a new property
person.city = "Mumbai"; // Updating an existing property

person.age = 22; // Updating an existing property

for ( let key in person ) {
  console.log(key" + ${person[key]}`);
}

// never keep javascript file name as objects
