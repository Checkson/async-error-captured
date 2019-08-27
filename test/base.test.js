const errorCaptured = require('../index');

test('Base test', (done) => {
  const testAsyncFunc = () => {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        const seed = Math.round(Math.random() * 10);
        seed > 5 ? resolve('done') : reject(new Error('failed'));
        done();
      }, 1000);
    });
  };

  const testErrorCapturedFunc = async () => {
    const [err, res] = await errorCaptured(testAsyncFunc);
    if (err) {
      console.log(err.toString());
      return;
    }
    console.log(res);
  };

  testErrorCapturedFunc();
});
