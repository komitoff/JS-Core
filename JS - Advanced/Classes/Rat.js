let result = (function() {
    class Rat {
        constructor(name) {
            this.name = name
            this.unitedRats = []
        }
        
        unite(rat) {
            if (rat instanceof Rat) {
                this.unitedRats.push(rat)
            }            
        }
        
        getRats() {
            return this.unitedRats
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
    return Rat
})()

let Rat = result
let rat2 = new Rat("Viktor");
let rat3 = new Rat("Vichi");
let rat4 = "fake rat";
console.log(rat2.getRats().length)