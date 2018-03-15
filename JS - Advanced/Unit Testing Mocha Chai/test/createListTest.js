const expect = require('chai').expect;
const createList = require('../classes/createList');

describe('testing function functionality', function () {
  var list = {};

  beforeEach(function () {
    list = createList();
  });

  describe('check if methods appears', function () {
    it('should have method add', function () {
      expect(list.hasOwnProperty('add')).to.be.true;
    });
    it('should have method shiftLeft', function () {
      expect(list.hasOwnProperty('shiftLeft')).to.be.true;
    });
    it('should have method shiftRight', function () {
      expect(list.hasOwnProperty('shiftRight')).to.be.true;
    });
    it('should have method swap', function () {
      expect(list.hasOwnProperty('swap')).to.be.true;
    });
  });

  describe('testing method add', function () {
    it('should add items', function () {
      list.add(5);
      list.add('two');
      expect(`[${list}]`).to.be.equal('[5, two]');
    });
  });

  describe('testing method shiftLieft', function () {
    it('should shift left correct', function () {
      list.add(1);
      list.add(2);
      list.add(3);
      list.shiftLeft();
      expect(`[${list}]`).to.be.equal('[2, 3, 1]');
    });
  });

  describe('testing method shiftRight', function () {
    it('should shift right correct', function () {
      list.add(1);
      list.add(2);
      list.add(3);
      list.shiftRight();
      expect(`[${list}]`).to.be.equal('[3, 1, 2]');
    });
  });

  describe('testing method swap', function () {
    it('should swap correct', function () {
      list.add(1);
      list.add(2);
      list.add(3);
      list.swap(0, 1);
      expect(`[${list}]`).to.be.equal('[2, 1, 3]');
    });
    it('should not swap if indeces are not integers', function () {
      expect(list.swap(1.4, 2.5)).to.be.false;
    });
    it('should not swap if indeces are strings or objects', function () {
      expect(list.swap({}, 'two')).to.be.false;
    });
    it('should return true if swap is made', function () {
      list.add(1);
      list.add(2);
      list.add(3);
      expect(list.swap(0, 1)).to.be.true;
    });
    it('should not swap if indeces are out of bounderies', function () {
      expect(list.swap(15, -5)).to.be.false;
    });
    it('should not swap if one of the indeces are out of bounderies', function () {
      list.add(12);
      list.add('pesho');
      expect(list.swap(0, 5)).to.be.false;
    });
    it('should not change the collection with invalid incedes', function () {
      list.add(3);
      list.add({});
      list.swap(3, 0);
      expect(`[${list}]`).to.be.equal('[3, [object Object]]');
    });
    it('should not change the collection with invalid second index', function () {
      list.add(3);
      list.add({});
      list.swap({}, 0);
      expect(`[${list}]`).to.be.equal('[3, [object Object]]');
    });
    it('should not change the collection with invalid first index', function () {
      list.add(3);
      list.add({});
      list.swap('first', 0);
      expect(`[${list}]`).to.be.equal('[3, [object Object]]');
    });
    it('should not change the collection with object as second index', function () {
      list.add(3);
      list.add({});
      list.swap(0, {});
      expect(`[${list}]`).to.be.equal('[3, [object Object]]');
    });
    it('should not change the collection with equal incedes', function () {
      list.add(3);
      list.add(4);
      list.swap(1, 1);
      expect(`[${list}]`).to.be.equal('[3, 4]');
    });
    it('should return false if swaping with equal indeces', function () {
      list.add(3);
      list.add(4);
      expect(list.swap(1, 1)).to.be.false;
    });
  });

  describe('testing toString method', function () {
    it('should print as follows [1, 2, 3]', function () {
      list.add(1);
      list.add(2);
      list.add(3);
      expect(`[${list}]`).to.be.equal('[1, 2, 3]');
    });
  });
});