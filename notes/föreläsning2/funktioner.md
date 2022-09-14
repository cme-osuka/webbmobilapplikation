// Funktioner

// Funktion-syntax
function myFunction(parameter1, parameter2, parametern) {
  // Här körs den kod du vill ska hända
}

myFunction("argument", "argument", "argument");
myFunction("bil", "båt", "cykel");

// Parametrar
function greeting(name) {
  if (name) {
    return `Hej ${name}!`;
  }

  return "Hejsan!";
}

const normal = greeting(); // => "Hejsan"
const toSomeone = greeting("Marcus"); // => "Hej Marcus!"

// Default-parametrar
function greeting(name = "främling") {
  return `Hej ${name}!`;
}

const result = greeting(); // => "Hej främling!"
const result2 = greeting("Ryan"); // => "Hej Ryan!"

// arguments (endast i function)
function function1(a, b, c, d, e, f) {
  console.log(arguments);
  console.log(arguments[0]); // A
}

// ...rest
function restFunction(name, ...resterande) {
  console.log(resterande);
}

restFunction("Oscar", "cykel", "kaffekopp", {}, []);

// Namngivning
function setState() {}
function getData() {}
function calcDogAge() {}
function createForm() {}
function checkStatus() {}

function longNameForNoReasonSoYouCantFigureOutWhatItDoes() {}

fil1.setState();
fil2.setState();

// rekommendation: En funktion gör en sak

function getUserId() {}
function checkPermissions() {}
function sendNotification() {}

function doEverything() {
  getUserId();
  checkPermissions();
  sendNotification();
}

function getUserIdCheckPermissionsSendNotification() {}

// Anonyma funktioner

function greet() {
  console.log("Hello")
}
greet();

const greet = function() {
  console.log("Hello")
};
greet();

const greet = () => {
  console.log("Hello")
}

<button
  onClick={function (event) {
    doSomething();
  }}
/>;
