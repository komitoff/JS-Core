const expect = require('chai').expect;
const StringBuilder = require('../classes/StringBuilder');

describe('testing StringBuilder', function () {
  var stringBuilder = {};
  beforeEach(function () {
    stringBuilder = new StringBuilder('test');
  });

  describe('testing having needed methods', function () {
    it ('should have methods described', function () {
      expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('append')).to.be.true;
      expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('prepend')).to.be.true;
      expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('insertAt')).to.be.true;
      expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('remove')).to.be.true;
      expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('toString')).to.be.true;
    });

  });

  describe('initialize with empty constructor', function () {
    it('should create empty data array if no parameter passed through the constructor', function () {
      var emptyCtr = new StringBuilder();
      expect(emptyCtr._stringArray instanceof Array).to.be.true;
    });
  });

  describe('initialize with non empty construcotr', function () {
    it('should initialize correct', function () {
      var ctr = new StringBuilder('example');
      expect(ctr._stringArray.length).to.be.equal(7);
    });
  });

  describe('testing prepend method', function () {
    it('should prepend correct', function () {
      stringBuilder.prepend('User, ');
      expect(stringBuilder.toString()).to.be.equal('User, test');
    });
    it('should throw exception if given param is number', function () {
      var thr = () => stringBuilder.prepend(3);
      expect(thr).to.throw;
    });
    it('should throw exception if passed param is object', function () {
      var thr = () => stringBuilder.prepend({});
      expect(thr).to.throw;
    });
    it('should not change the inner array with passed empty string', function () {
      stringBuilder.prepend('');
      expect(stringBuilder.toString()).to.be.equal('test');
    });
  });

  describe('testing insertAt method', function () {
    it('should throw exeption if trying to insert object', function () {
      var thr = () => stringBuilder.insertAt({}, 5);
      expect(thr).to.throw;
    });
    it('should throw expection if trying to insert number', function () {
      var thr = () => stringBuilder.insertAt(3, 3);
      expect(thr).to.throw;
    });
    it('should insert at position correct', function () {
      stringBuilder.insertAt('asd', 4)
      expect(stringBuilder.toString()).to.be.equal('testasd')
    });
  });

  describe('testing remove method', function () {
    it('should remove correct', function () {
      stringBuilder.remove(0, 2);
      expect(stringBuilder.toString()).to.be.equal('st');
    });
  });

  describe('testing append method', function () {
    it('should append correct', function () {
      stringBuilder.append('123');
      expect(stringBuilder.toString()).to.be.equal('test123');
    });
    it('should throw exception if passed number as param', function () {
      var thr = () => stringBuilder.append(12);
      expect(thr).to.throw;
    });
    it('should throw exception if passed object as param', function () {
      var thr = () => stringBuilder.append({});
      expect(thr).to.throw;
    });
  });
});