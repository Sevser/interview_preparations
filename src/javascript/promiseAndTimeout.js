// what output will be here

console.log('1');

setTimeout(() => console.log('2'));

setTimeout(() => console.log('3'), 10);

(new Promise((resolve => resolve()))).then(() => console.log(4));

console.log('5');


/*
right answer is:
1
5
4
2
3


why https://www.youtube.com/watch?v=u1kqx6AenYw
*/
