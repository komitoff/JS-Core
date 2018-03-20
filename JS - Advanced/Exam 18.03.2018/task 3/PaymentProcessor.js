class PaymentProcessor {
  constructor(options = { types: ["service", "product", "other"], precision: 2 }) {
    this.options = { types: ["service", "product", "other"], precision: 2 };
    this.setOptions(options)
    this.payments = new Map;
  }

  registerPayment(id, name, type, value) {
    this._validate(id, name, type, value);
    this.payments.set(id, { name: name, type: type, value: value });
  }

  deletePayment(id) {
    if (!this.payments.has(id)) {
      throw new Error('Id not found!');
    }
    this.payments.delete(id);
    }

  get(id) {
    if (!this.payments.has(id)) {
      throw new Error('Id not found!');
    }
    let payment = this.payments.get(id);
    var details = `Details about payment ID: ${id}\n- Name: ${payment.name}\n- Type: ${payment.type}\n- Value: ${payment.value.toFixed(this.options.precision)}`;
    return details;
  }

  setOptions(options) {
    if (options.hasOwnProperty('types')) {
      this.options.types = options.types;
    }
    if (options.hasOwnProperty('precision')) {
      if (options.precision > 0) {
        this.options.precision = options.precision;
      }      
    }
  }

  toString() {
    var balance = 0;
    for (const payment of this.payments) {
      balance += payment[1].value;
    }
    var output = `Summary:\n- Payments: ${this.payments.size}\n- Balance: ${balance.toFixed(this.options.precision)}`;
    return output;
  }

  _validate(id, name, type, value) {
    if (id === '') {
      throw new Error('Invalid id');
    }
    if (name === '') {
      throw new Error('Invalid name');
    }
    if (isNaN(value)) {
      throw new Error('Invalid value');
    }
    if (!this.options['types'].includes(type)) {
      throw new Error('Invalid type');
    }
    if (this.payments.has(id)) {
      throw new Error('Id already exists');
    }
  }
}

const generalPayments = new PaymentProcessor();

const emptyProc = generalPayments.toString();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000.03);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
generalPayments.registerPayment('01', 'HR Consultation', 'service', 3000);
const manyProc = generalPayments.toString();
const details = generalPayments.get('0001');
console.log(details);