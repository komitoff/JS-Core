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

//#3 - Add or remove element from any array
function addAndRemove(array) {
  let myArr = []
  for (let i = 0; i < array.length; i++) {
    if ('add' === array[i]) {
      myArr.push(i + 1)
    } else if ('remove' === array[i]) {
      myArr.pop()
    }
  }

  if (myArr.length === 0) {
    console.log('Empty')
    return
  }

  for (let j = 0; j < myArr.length; j++) {
    console.log(myArr[j])
  }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add'])
