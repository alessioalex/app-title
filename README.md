## app-title

![pic](https://cldup.com/IALXdNurBy.png)

This module will set the `process.title` to your application name (the one set in `package.json`).

### Example

`index.js` (your app main file):

```js
require('app-title')();

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
```

`package.json`:

```js
{
  "name": "app-title"
}
```

Run `node index.js` and then `top`:

![pic](https://cldup.com/Sa_EgrJNhu.png)

### License

MIT
