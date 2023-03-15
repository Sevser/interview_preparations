/*
  How set up this to executable function.
*/
var obj = {prop: 'value'};
function callFunc () {
  console.log(this);
};

callFunc.call(obj); // logs {prop: 'value'}

function bindFunc() {
  console.log(this);
}

var obj = {prop: 'value'};
var boundFunc = bindFunc.bind(obj);
boundFunc(); // logs {prop: 'value'}

var obj = {prop: 'value'};
function applyFunc () {
  console.log(this);
};

applyFunc.apply(obj); // logs {prop: 'value'}
