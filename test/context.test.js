const errorCaptured = require('../index');

test('context test', (done) => {
  class TestAsyncClass {
    constructor () {
      this.timestamp = 1000;
      this.timer = null;
    }

    testAsyncFunc () {
      return new Promise((resolve, reject) => {
        this.timer = setTimeout(() => {
          clearTimeout(this.timer);
          const seed = Math.round(Math.random() * 10);
          seed > 5 ? resolve('done') : reject(new Error('failed'));
          done();
        }, this.timestamp);
      });
    }
  }

  const testAsyncClass = new TestAsyncClass();

  const testErrorCapturedFunc = async () => {
    const [err, res] = await errorCaptured(testAsyncClass.testAsyncFunc.bind(testAsyncClass));
    if (err) {
      console.log(err.toString());
      return;
    }
    console.log(res);
  };

  testErrorCapturedFunc();
});
