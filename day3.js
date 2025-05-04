//conditional in javascript
const isRaining = false;
if (isRaining) {
  console.log("Carry Umbrella.");
} else {
  console.log("Don't Carry Umbrella.");
}

const temperature = 25;
if (temperature > 30) {
  console.log("It is hot outside.");
} else if (temperature > 25) {
  console.log("It is pleasant outside");
} else {
  console.log("It is colder outside");
}
//ternary operator
const result = isRaining ? "Carry Umbrella?" : "Dont Carry?";
console.log(result);

//syntax= condition ? trueExpression : falseExpression
//short circuit evaluation
const eg = isRaining && "CARRY UMBRELLA." || "DONT CARRY"
console.log(eg);
let isLoggedIn = true;
const name = isLoggedIn && "Authenticated!"
console.log(name)

//nullish coelescing operator 
let age = null;
let output = age ?? "No Age";
console.log(output)