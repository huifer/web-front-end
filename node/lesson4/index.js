/**
 *
 * @param {int} data
 */
function test_func(data) {
  if (data === 0) {
    return 0;
  } else if (data === 1) {
    return 1;
  } else {
    return data;
  }
};

// export { test_func };
// const _test_func = test_func;
// export { _test_func as test_func };
exports.test_func = test_func;
