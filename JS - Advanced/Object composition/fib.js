function fibonator() {
  let first = 0;
  let second = 1;

  return () => {
    var next = first + second;
    first = second;
    second = next;
    return first;
  }
}

let fib = fibonator();
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())