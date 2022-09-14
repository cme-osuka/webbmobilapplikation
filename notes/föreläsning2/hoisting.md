// Hoisting

greeting("Ryan"); // => "Hello Ryan";

function greeting(name) {
  console.log(`Hello ${name}`);
}

// Utan hoisting
function greeting(name) {
  console.log(`Hello ${name}`);
}

greeting("Ryan"); // => "Hello Ryan";

// Exempel
var a = 100;

1. Declaration
  var a;

2. Initialisering / Assignment
  a = 100;

3. Usage
  var a = 100;

  a + 20;

// const & let

console.log(variable); // Kastar ett ReferenceError
let variable = "hello";
console.log(variable); // "hello";
