class Rat {
  constructor(name) {
    this.name = name
    this.unitedRats = []
  }

  unite(rat) {
    this.unitedRats.push(rat)
  }

  getRats() {
    console.log(this.unitedRats)
  }

  toString() {
    console.log(this.name)
    if (this.unitedRats.length > 0) {
      for (let i = 0; i < this.unitedRats.length; i++) {
        console.log('##' + this.unitedRats[i].name)
      }
    }
  }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho