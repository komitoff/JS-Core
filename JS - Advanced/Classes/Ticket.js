function solve(arr, attr) {

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination
      this.status = status
      this.price = price
    } 
  }  

  let output = []
  for (let i = 0; i < arr.length; i++) {
    let tokens = arr[i].split('|')
    let destination = tokens[0]
    let price = Number(tokens[1])
    let status = tokens[2]
    output.push(new Ticket(destination, price, status))
  }

  var sorted = output.sort(function (x, y) {
    var first = x[attr]
    var second = y[attr]

    if(first > second) {
      return 1
    } 
    if (first < second) {
      return - 1
    }

    return 0
  }) 
  return output
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'))