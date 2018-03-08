class Stringer {
  constructor(string, length) {
    this.innerString = string
    this.innerLength = length
  }

  increase(len) {
    this.innerLength += len
    if (this.innerLength < 0) 
      this.innerLength = 0  
  }

  decrease(len) {
    this.innerLength -= len
    if (this.innerLength < 0)
      this.innerLength = 0  
  }

  toString() {
    if (this.innerLength >= this.innerString.length) {
      return this.innerString
    }

    let diff = this.innerString.length - this.innerLength
    return this.innerString + '.'.repeat(diff)
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test