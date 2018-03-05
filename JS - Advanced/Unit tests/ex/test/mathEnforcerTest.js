const expect = require('chai').expect
const mathEnforcer = require('../functions/mathEnforcer')

describe('mathEnforcer', function () {
  describe('addFive(number)', function () {
    it('should return 15 for input (10)', function() {
      expect(mathEnforcer.addFive(10)).to.be.equal(15)
    })
    it('should return undefined for string input ("asd") ', function() {
      expect(mathEnforcer.addFive('asd')).to.be.equal(undefined)
    })
    it('should return -50 for input (-55)', function() {
      expect(mathEnforcer.addFive(-55)).to.be.equal(-50)
    })
    it('should return 7.5 for input (2.5)', function() {
      expect(mathEnforcer.addFive(2.5)).to.be.equal(7.5)
    })
  })
  describe('subtractTen(number)', function () {
    it('should return 10 for input (20)', function() {
      expect(mathEnforcer.subtractTen(20)).to.be.equal(10)
    })
    it('should return undefined for string input ("asd") ', function() {
      expect(mathEnforcer.addFive('asd')).to.be.equal(undefined)
    })
    it('should return -30 for input (-20)', function() {
      expect(mathEnforcer.subtractTen(-20)).to.be.equal(-30)
    })
    it('should return 10.5 for input (20.5)', function() {
      expect(mathEnforcer.subtractTen(20.5)).to.be.equal(10.5)
    })
  })
  describe('sum(number1, number2)', function () {
    it('should return 10 for input (3, 7)', function() {
      expect(mathEnforcer.sum(3, 7)).to.be.equal(10)
    })
    it('should return undefined if one of the given input is not a number', function() {
      expect(mathEnforcer.sum('asd', 2)).to.be.equal(undefined)
      expect(mathEnforcer.sum(2, 'asd')).to.be.equal(undefined)
      expect(mathEnforcer.sum('asd', 'bsd')).to.be.equal(undefined)
    })
    it('should return 22.22 for input (22, 0.22)', function() {
      expect(mathEnforcer.sum(22, 0.22)).to.be.equal(22.22)
    })
    it('should return -50 for input (-100, 50)', function() {
      expect(mathEnforcer.sum(-100, 50)).to.be.equal(-50)
    })
  })
})
