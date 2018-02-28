const expect = require("chai").expect;
function sum(arr) {
  let sum = 0
  for (num of arr) {
    sum += Number(num)
  }
  return sum
}


describe('sum(arr)', function() {
  it('should return 3 for [1,2]', function() {
    expect(sum([1,2])).to.be.equal(3)
  })
  it('should return 1 for [1]', function() {
    expect(sum([1])).to.be.equal(1)
  })
  it('should return 0 for []', function() {
    expect(sum([])).to.be.equal(0)
  })
  it('should retur NaN for invalid input', function() {
    expect(sum(['Invalid input!'])).to.be.NaN
  })
  it('should return 5 for [1.4, 1.6, 2]', function() {
    expect(sum([1.4, 1.6, 2])).to.be.equal(5)
  })
})