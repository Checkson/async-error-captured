# async-error-captured

A tool method to catch async function errors.

## install

```
$ npm install async-error-captured --save
```

**Or**

```
$ yarn add async-error-captured
```


## Usage

```javascript
const errorCaptured = require('async-error-captured');

const handleFunc = async () => {
  const [err, res] = await errorCaptured(asyncFunc, args1, args2, ...);
  if (err) {
    throw new Error(err);
  }
  console.log(res);
}
```


## License

MIT