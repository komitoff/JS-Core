const expect = require('chai').expect
const lookupChar = require('../functions/lookupChar')

describe('lookupChar(string, index)', function() {
  it('should return "a" for give input ("ivan", 2)', function() {
    expect(lookupChar('ivan', 2)).to.be.equal('a')
  })
  it('should return undefined for input (2, 2)', function() {
    expect(lookupChar(2, 2)).to.be.equal(undefined)
  })
  it('should return undefined for input (2.2, 2)', function() {
    expect(lookupChar(2.2, 2)).to.be.equal(undefined)
  })
  it('should return undefined for input ("asd", 3.4)', function() {
    expect(lookupChar('asd', 3.4)).to.be.equal(undefined)
  })
  it('should return "Incorrect index" for input ("asd", 12)', function() {
    expect(lookupChar('asd', 12)).to.be.equal("Incorrect index")
  })
  it('should return "Incorrect index" for input ("asd", -1)', function() {
    expect(lookupChar('asd', -1)).to.be.equal("Incorrect index")
  })
})