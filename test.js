const should = require('chai').should();
const _ = require('lodash');

const sn = require('./sn');

describe.only('Setup', () => {
  it('is OK', () => {
    sn().should.equal(1);
  });
});

describe.skip(`sn function`, () => {
  beforeEach(() => {
    // ...
  });

  it(`it should ..`, () => {
    contains_array(sn(), [50,50,50,50,50]).should.be.true;
  });

  // ...
});

describe(`contains_array function`, () => {
  it('returns true with a contained array', () => {
    expect(contains_array([[1,2,3],[1,2],[1]], [1])).to.be.true;
  });

  // ...
});

const contains_array = (arrays, array) => {
  return arrays
    .filter(a =>
      _.isEqual(a, array)
    ).length > 0;
}
