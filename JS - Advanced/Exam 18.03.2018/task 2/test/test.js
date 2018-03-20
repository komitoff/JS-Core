const expect = require('chai').expect;
let PaymentPackage = require('../PaymentPackage');

describe('Payment package tests', function () {
  var pm = {};
  beforeEach(function () {
    pm = new PaymentPackage('HR Services', 1500);
  });

  describe('initial values tests', function () {
    it('has functions attached to prototype', function () {
      expect(Object.getPrototypeOf(pm).hasOwnProperty('name')).to.equal(true, "Missing name property");
      expect(Object.getPrototypeOf(pm).hasOwnProperty('value')).to.equal(true, "Missing value property");
      expect(Object.getPrototypeOf(pm).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
      expect(Object.getPrototypeOf(pm).hasOwnProperty('VAT')).to.equal(true, "Missing VAT property");
      expect(Object.getPrototypeOf(pm).hasOwnProperty('active')).to.equal(true, "Missing active property");
    });

    it('should create correctly data types', function () {
      expect(typeof pm.value).to.be.equal('number');
      expect(typeof pm.active).to.be.equal('boolean');
      expect(typeof pm.VAT).to.be.equal('number');
    });

    it('should throw ', function () {
      var willThrow = () => pm.name = '';
      expect(willThrow).to.throw;
    });
    it('should throw ', function () {
      var willThrow = () => pm.value = -1;
      expect(willThrow).to.throw;
    });
    it('should throw ', function () {
      var willThrow = () => pm.VAT = -1;
      expect(willThrow).to.throw;
    });
    it('should throw ', function () {
      var willThrow = () => pm.active = null;
      expect(willThrow).to.throw;
    });
    it('should throw ', function () {
      var willThrow = () => pm.name = null;
      expect(willThrow).to.throw;
    });
    it('should throw ', function () {
      var willThrow = () => pm.value = null;
      expect(willThrow).to.throw;
    });
    it('should throw ', function () {
      var willThrow = () => pm.VAT = null;
      expect(willThrow).to.throw;
    });
    it('should print correct', function () {
      var expected = `Package: HR Services
- Value (excl. VAT): 1500
- Value (VAT 20%): 1800`;
      expect(pm + '').to.be.equal(expected);      
    });
    it('should append inactive', function () {
      pm.active = false;
      var expected = `Package: HR Services (inactive)
- Value (excl. VAT): 1500
- Value (VAT 20%): 1800`;
      expect(pm + '').to.be.equal(expected);      
    });
  });
});