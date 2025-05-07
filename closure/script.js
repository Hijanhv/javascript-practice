function setup() {
  let largeData = new Array(1000000).fill("memory"); // 🧸 make a HUGE toy box!
  return function () {
    console.log("Closure using largeData");
  };
}

let leak = setup(); // 📦 keep a small paper (closure) that REMEMBERS the big toy box

leak(); // 🧸 use the paper to play with the toy box

//You build a big toy box (largeData) full of 1 million toys.

//You create a tiny note (closure function) that just says "I remember the toy box!"

//You keep that note in your pocket (leak variable).

//Now your mom (garbage collector) wants to clean the room.

//But since you still have that note in your pocket, she thinks,

//“Hmm… maybe she still needs this toy box, I won’t throw it out.”

//So, the huge toy box stays — even though you're not using it.

//That’s a memory leak — when the computer is holding onto stuff it should throw away, but can’t — because it’s still linked to something.

//🎯 Final Lesson:
//Closure = memory note that remembers stuff even after its main page is gone.

//Garbage collector = computer cleaner who throws away unused stuff.

//Memory leak = when you accidentally keep something you don’t need, and it wastes space.
