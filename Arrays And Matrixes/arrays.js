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

//#4 Rotate array
function rotate(array) {
  let step = Number(array.pop())
  for (let i = 0; i < step % 10; i++) {
      array.unshift(array[array.length-1])
      array.pop()   
  }
  console.log(array.join(' '))
}

//#5 Increasing sequence of elements
function ndc(arr) {
  let result = arr.filter((v, i) => v >= Math.max(...arr.slice(0, i + 1)))
  console.log(result.join('\n'))
}

//#6 Sort array
function arrSort(myArr) {
  myArr.sort((x, y) => x > y)
  .sort((c, d) => c.length > d.length)
  console.log(myArr.join('\n'))
}

//#7 magic matrices
function magicMatrix(matrix) {

  let sum = matrix[0].reduce((a, b) => a + b);
  let isMagic = true;

  for (let i = 1; i < matrix.length; i++) {
    if (sum != matrix[i].reduce((a, b) => a + b)) {
      isMagic = false
      console.log(isMagic)
      return
    }
  }

  for (let col = 0; col < matrix[0].length; col++) {
    let sumCol = 0;
    for (let row = 0; row < matrix.length; row++) {
      sumCol += matrix[row][col];
    }

    if (sumCol != sum) {
      
      isMagic = false;
      console.log(isMagic);
      return;

    }
  }

  console.log(isMagic);
}

console.log(magicMatrix([[11, 32, 45],
  [21, 0, 1],
  [21, 1, 1]]))