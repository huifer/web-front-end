var index = require('../index');
var should = require('should');

describe('test/index.test.js', function() {
  it('should equal 1 when n === 1', function() {
    index.test_func(1).should.equal(1);
  });

  it('should equal 0 when n === 0', () => {
    index.test_func(0).should.equal(0);
  });

  it('should equal 2 when n ===2 ', () => {
    index.test_func(2).should.equal(2);
  });
});
