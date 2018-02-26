(function solve() {
  let sum = 0;
  
  function add(value) {
    sum += value;
    return add;
  }

  add.toString= function () {
    return sum;
  }
  return add;
})();