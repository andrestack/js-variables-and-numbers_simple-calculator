console.clear();

let operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  const sum = operand1 + operand2;
  console.log(sum);

  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
});

subtractButton.addEventListener("click", () => {
  const minus = operand1 - operand2;
  console.log(minus);
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
});

multiplyButton.addEventListener("click", () => {
  const multiply = operand1 * operand2;
  console.log(multiply);
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
});

divideButton.addEventListener("click", () => {
  const divide = operand1 / operand2;
  console.log(divide);
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
});

exponentButton.addEventListener("click", () => {
  const raise = operand1 ** operand2;
  console.log(raise);
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
});

moduloButton.addEventListener("click", () => {
  const modulo = operand1 % operand2;
  console.log(modulo);

  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  const increase = operand1 + 1;
  console.log(increase);

  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});

increaseByFiveButton.addEventListener("click", () => {
  const byFive = operand1 + 5;
  console.log(byFive);
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
});

decreaseByOneButton.addEventListener("click", () => {
  const decrease = operand1 - 1;
  console.log(decrease);
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
});

decreaseByFiveButton.addEventListener("click", () => {
  const decrease5 = operand1 - 5;
  console.log(decrease5);
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
});

multiplyByTwoButton.addEventListener("click", () => {
  const timesTwo = operand1 * 2;
  console.log(timesTwo);
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

divideByTwoButton.addEventListener("click", () => {
  const divideTwo = operand1 / 2;
  console.log(divideTwo);

  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});
