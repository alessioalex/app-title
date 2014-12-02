require('../')();

console.log('process.title === %s', process.title);
console.log('now open `top` and be amazed :)');

setInterval(function() {
  var sum = 0;

  for (var i = 0; i < 6000000; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
}, 1000);
