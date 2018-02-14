function hungryProgrammer(meals = [], commands = []) {
  let mealsEaten = 0
  for (const key in commands) {
    let command = commands[key].split(' ')
    if ('End' === command[0])
      break
    switch (command[0]) {
        case 'Serve':
          serve()
          break
        case 'Add':
          let meal = command[1]
          add(meal)
          break
        case 'Shift':
          let firstIndex = Number(command[1])
          let secondIndex = Number(command[2])
          shift(firstIndex, secondIndex)
          break
        case 'Eat':
          eat()
          break
        case 'Consume':
          let startIndex = Number(command[1])
          let endIndex = Number(command[2])
          consume(startIndex, endIndex)
          break
        default: 
          break
    }
  }

  if (meals.length === 0 ) {
    console.log('The food is gone')
  } else {
    console.log('Meals left: ' + meals.join(', '))
  }
  console.log(`Meals eaten: ${mealsEaten}`)

  function serve() {
    if (meals.length === 0) 
      return
    let meal = meals.pop()
    console.log(`${meal} served!`)
  }

  function add(meal) {
    if (meal === undefined)
      return
    meals.unshift(meal)
  }

  function shift(firstIndex, secondIndex) {
    if (firstIndex >= meals.length || secondIndex >= meals.length || firstIndex < 0 || secondIndex < 0) {
      return
    }
    [ meals[firstIndex], meals[secondIndex] ] = [ meals[secondIndex], meals[firstIndex] ]
  }

  function eat() {
    if (meals.length === 0) 
      return
    let meal = meals.shift()
    mealsEaten ++
    console.log(`${meal} eaten`)
  }

  function consume(startIndex, endIndex) {
    if (startIndex >= meals.length || endIndex >= meals.length || startIndex < 0 || endIndex < 0) {
      return
    }
    meals.splice(startIndex, Math.abs((endIndex - startIndex) + 1))
    mealsEaten += ((endIndex - startIndex) + 1)
    console.log('Burp!')
  }
}
