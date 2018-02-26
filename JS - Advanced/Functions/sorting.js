function sortArray(inputArr, method) {
  var ascendingComparator = function(a, b) {
    return a - b;
  }

  var descendingComparator = function (a, b) {
    return b - a;
  }

  var sortingStrategies = {
    'asc': ascendingComparator,
    'desc': descendingComparator
  }

  return inputArr.sort(sortingStrategies[method])
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));