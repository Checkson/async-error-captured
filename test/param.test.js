const errorCaptured = require('../index');

test('param test', (done) => {
  const testAsyncFunc = (timestamp) => {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        const seed = Math.round(Math.random() * 10);
        seed > 5 ? resolve('done') : reject(new Error('failed'));
        done();
      }, timestamp);
    });
  };

  const testErrorCapturedFunc = async () => {
    const [err, res] = await errorCaptured(testAsyncFunc, 500);
    if (err) {
      console.log(err.toString());
      return;
    }
    console.log(res);
  };

  testErrorCapturedFunc();
});
