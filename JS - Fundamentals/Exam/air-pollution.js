function solve(map = [], commands = []) {
  let sofiaMap = []
  for (let i = 0; i < 5; i++) {
    sofiaMap.push(map[i].split(' ').map(Number))
  }

  for (let i = 0; i < commands.length; i++) {
    let tokens = commands[i].split(' ')
    let value = Number(tokens[1])
    if (tokens[0] == 'breeze') {
      breeze(value)
    }
    else if (tokens[0] == 'gale') {
      gale(value)
    }
    else if(tokens[0] == 'smog') {
      smog(value)
    }
  }
  let result = []
  for (let i = 0; i < sofiaMap.length; i++) {
    for (let j = 0; j < sofiaMap[0].length; j++) {
      if (sofiaMap[i][j] >= 50) {
        result.push(`[${i}-${j}]`)
      }
    }
  }

  if (result.length > 0) {
    console.log('Polluted areas: ' + result.join(', '))
  } else {
    console.log('No polluted areas')
  }
  function breeze(row) {
    if (row >= 0 && row < 5) {
      for (let i = 0; i < sofiaMap[row].length; i++) {
        sofiaMap[row][i] -= 15
        if (sofiaMap[row][i] < 0) {
          sofiaMap[row][i] = 0
        }
      }
    } 
  }

  function gale(col) {
    if (col >= 0 && col < 5) {
      for (let i = 0; i < sofiaMap.length; i++) {
        sofiaMap[i][col] -= 20
        if (sofiaMap[i][col] < 0) 
          sofiaMap[i][col] = 0
      }
    }  
  }

  function smog(value) {
    for (let i = 0; i < sofiaMap.length; i++) {
      for (let j = 0; j < sofiaMap[0].length; j++) {
        sofiaMap[i][j] += value
        if (sofiaMap[i][j] < 0) 
          sofiaMap[i][j] = 0
      }
    }
  }
}

solve([
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
  ],
  ["breeze 15", "gale 5", "smog 25"])