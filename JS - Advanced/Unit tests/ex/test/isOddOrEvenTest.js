const expect = require('chai').expect
const isOddOrEven = require('../functions/isOddOrEven')

describe('sum(arr)', function() {
  it('should should return even for input "as"', function() {
    expect(isOddOrEven('as')).to.be.equal('even')
  })
  it('should return odd for input "asd"', function() {
    expect(isOddOrEven('asd')).to.be.equal('odd')
  })
  it('should return undefined for input 10', function() {
    expect(isOddOrEven(10)).to.be.equal(undefined)
  })
  it('should return undefined for object input', function() {
    expect(isOddOrEven({name: 'pesho'})).to.be.equal(undefined)
  })
})