//call back function
function x(y) {
  y();
}
x(function y() {
  console.log("Callback function called");
});

setTimeout(function () {
  console.log("Hello");
}, 2000);

setTimeout(() => {
  console.log("Hello");
}, 2000);

//blocking the main thread
function blocking() {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  console.log("Blocking the main thread");
}
blocking();

//power of callbacks
function attachEventListener() {
  let count = 0;
  const btn = document.getElementById("clickme");
  if (btn) {
    btn.addEventListener("click", function () {
      count++;
      console.log("Button clicked", count);
    });
  } else {
    console.warn('Element with id "clickme" not found.');
  }
}

// garbage collection and remove event listeners

// Call attachEventListener after DOM is loaded
window.addEventListener("DOMContentLoaded", attachEventListener);

//closures demo with event listeners

//scope demo with event listeners

// garbage collection and remove event listeners
