function fn() {
  console.log('hello'); // 1

  setTimeout(function() {
    console.log('setTimeout1'); // 5
  }, 0);

  new Promise(function(resolve) {
    console.log('constructor');  // перед 3
    // 
    resolve();
  }).then(function() {
    console.log('then1'); // 3
  }).then(function() {
    console.log('then2'); // 4 
  });

  console.log('bye'); // 2
}