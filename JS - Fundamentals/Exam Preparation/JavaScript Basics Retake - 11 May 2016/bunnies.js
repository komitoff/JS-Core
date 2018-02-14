function solve(input = []) {
  let map = []
  let bombsCoordinate = []
  input = input.filter(x => x != '')

  for (let i = 0; i < input.length - 1; i++) {
    map.push(input[i].split(' ').map(Number))
  }
  bombsCoordinate = input[input.length - 1].split(' ')
  
  for (let i = 0; i < bombsCoordinate.length; i++) {
    explode(bombsCoordinate[i])
  }

  let dmg = 0
  let survived = 0
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] > 0) {
        dmg += map[i][j]
        survived ++
      }
    }
  }

  console.log(dmg)
  console.log(survived)
  function explode(pos) {
    let tokens = pos.split(',')
    let row = Number(tokens[0])
    let col = Number(tokens[1])
    let damage = 0
    if (row >= 0 && row < map.length && col >= 0 && col < map[0].length) {
      damage = map[row][col]
    } else {
      return
    }
        

    if (row + 1 < map.length) {
      map[row + 1][col] = map[row + 1][col] - damage < 0 ? 0 : map[row + 1][col] - damage
    }
    if (row > 0) {
      map[row - 1][col] = map[row - 1][col] - damage < 0 ? 0 : map[row - 1][col] - damage
    } 
    if ( row + 1 < map.length && col < map[0].length) {
      map[row + 1][col + 1] = map[row + 1][col + 1] - damage < 0 ? 0 : map[row + 1][col + 1] - damage
    } 
    if (row + 1 < map.length && col > 0) {
      map[row + 1][col - 1] = map[row + 1][col - 1] - damage < 0 ? 0 : map[row + 1][col - 1] - damage
    }
    if (row > 0 && col < map[0].length) {
      map[row - 1][col + 1] = map[row - 1][col + 1] - damage < 0 ? 0 : map[row - 1][col + 1] - damage
    }
    if (row > 0 && col > 0) {
      map[row - 1][col - 1] = map[row - 1][col - 1] - damage < 0 ? 0 : map[row - 1][col - 1] - damage
    }
    if (col > 0) {
      map[row][col - 1] = map[row][col - 1] - damage < 0 ? 0 : map[row][col - 1] - damage
    }
    if (col < map[0].length) {
      map[row][col + 1] = map[row][col + 1] - damage < 0 ? 0 : map[row][col + 1] - damage
    }
  }
}

solve(['10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0 0,0'])

// solve(['5 10 15 20',
//     '10 10 10 10',
//     '10 15 10 10',
//     '10 10 10 10',
//     '2,2 0,1'])

// solve([ '5 10 15 20',
// '10 10 10 10',
// '10 15 10 10',
// '10 10 10 10',
// '2,2 0,1',
// '' ])