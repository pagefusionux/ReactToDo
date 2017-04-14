/* Using the Spread Operator
 *
 * Useful when you want to call a function with a set of arguments, but
 * those arguments are in an array.
 */

// spread operator (spreads out array into arguments)
function add(a, b) {
  return a + b;
}

const toAdd = [9, 5];
console.log(add(...toAdd));

// using spread operator to append array elements
const groupA = ['Chris', 'Curtis'];
const groupB = ['Linus'];
const final1 = [3, ...groupA, ...groupB];

console.log(final1);

const person1 = ['Andrew', 40];
const person2 = ['Mary', 32];

/*
* Some other examples...
* */

// Hi [name], you are [age]
const greet1 = (name, age) => {
  console.log('Hi ' + name + ', you are '+ age);
}
greet1(...person1);
greet1(...person2);

// Hi [name]
let names = ['Mike', 'Ben'];
const final2 = ['Andrew', ...names];

final2.forEach(function (name) {
  console.log('Hi ' + name);
});
