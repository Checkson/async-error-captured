/**
 * Copyright (c) 2019-08-27 Checkson.
 * Licensed under the MIT License (MIT).
 * Github:https://github.com/Checkson/async-error-captured
 */

/**
 * catch async function error
 * @param {function} asyncFunc
 * @param {...any} args
 * @return {array}
 */
const errorCaptured = async (asyncFunc, ...args) => {
  try {
    return [null, await asyncFunc(...args)];
  } catch (err) {
    return [err, null];
  }
};

// export the module
module.exports = errorCaptured;
