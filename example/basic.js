require('../')(function() {
  console.log('process.title === %s , pid === %s', process.title, process.pid);
  console.log('now run: "ps aux | less | grep %s"', process.pid);
});

setInterval(function() {
  var sum = 0;

  for (var i = 0; i < 6000000; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
}, 1000);
