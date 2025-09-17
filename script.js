// Function with parameter & return value
function multiply(a, b) {
  return a * b;  // returns result
}

// Global scope variable
let box = document.getElementById("box");

// Function to trigger animation
function startAnimation() {
  // Local scope variable
  let result = multiply(5, 3);
  console.log("Multiply result:", result);

  // Trigger CSS animation
  box.classList.add("animate");

  // Remove animation class after it finishes (so it can be replayed)
  setTimeout(() => {
    box.classList.remove("animate");
  }, 1000);
}
