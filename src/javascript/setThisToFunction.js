/*
  How set up this to executable function.
*/
console.log('attach this to function with call', `
function callFunc () {
  console.log(this);
};
callFunc.call(obj); // result: `);
var obj = {prop: 'value'};
function callFunc () {
  console.log(this);
};

callFunc.call(obj); // logs {prop: 'value'}

console.log();
console.log('attach this to function with bind', `
function bindFunc() {
  console.log(this);
}

var boundFunc = bindFunc.bind(obj);
boundFunc(); // result: `);
function bindFunc() {
  console.log(this);
}

var boundFunc = bindFunc.bind(obj);
boundFunc(); // logs {prop: 'value'}

console.log();
console.log('attach this to function with apply', `
function applyFunc () {
  console.log(this);
};

applyFunc.apply(obj); // result: `);
function applyFunc () {
  console.log(this);
};

applyFunc.apply(obj); // logs {prop: 'value'}
