const expect = require('chai').expect
const StringBuilder = require('../string-builder')



// let dummy = new StringBuilder('dummy')
console.log(sb.toString())
describe('StringBuilder', function () {
  let builder

  describe('constructor()', function () {
    beforeEach(function() {
        builder = new StringBuilder()
    })

    it('should create new object with give constructor parameters', function() {
      let expected = 'test'
      expect(sb.toString()).to.be.equal(expected)
    })

    it('should return empty string for given undefined in constructor', function() {
      expect(sb2.toString()).to.be.equal('')
    })
  })
  describe('append()', function () {
      
  })
  describe('prepend()', function () {
      
  })
  describe('insertAt()', function () {
      
  })
  describe('remove()', function () {
      
  })
})