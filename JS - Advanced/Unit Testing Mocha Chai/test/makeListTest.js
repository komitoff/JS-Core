const expect = require('chai').expect;
const makeList = require('../classes/makeList');

describe('testing functionality', function () {
  var list = {};
  beforeEach(function () {
    list = makeList();
  });


  describe('properties', function () {
    it('should have addLeft method', function () {
      expect(list.hasOwnProperty('addLeft')).to.be.true;
    });
    it('should have method addRight', function () {
      expect(list.hasOwnProperty('addRight')).to.be.true;
    });
    it('should have method toString', function () {
      expect(list.hasOwnProperty('toString')).to.be.true;
    });
  });

  describe('addLeft method testing', function () {
    it('should add to the beggining of the data', function () {
      list.addLeft(10);
      list.addLeft(5);
      expect(`[${list}]`).to.be.equal('[5, 10]');
    })
  });

  describe('addRight method testing', function () {
    it('should contain 5', function () {
      list.addRight(5);
      list.addRight(10);
      expect(`[${list}]`).to.be.equal('[5, 10]');
    })
  });

  describe('clear method testing', function () {
    it('should be empty', function () {
      list.addLeft(5);
      list.addRight('two');
      list.clear();
      expect(`[${list}]`).to.be.equal('[]');
    })
  });
});