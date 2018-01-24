//#1 - prints array with give delimiter
function delimiter(input) {
    return input.join(input.pop());
}

//#2 - print array value on given step
function elementsOnGivenStep(array) {
  let step = Number(array[array.length - 1])
  for (let i = 0; i < array.length - 1; i += step) {
    console.log(array[i])
  }
}

elementsOnGivenStep([5, 20, 31, 4, 20, 2])
