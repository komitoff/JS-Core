function heroicInventory(arr = []) {
  let inventory = []
  
  for (let i = 0; i < arr.length; i++) {
    let player = {}
    let tokens = arr[i].split(' / ')
    player.name = tokens[0]
    player.level = Number(tokens[1])
    if (tokens.length > 2 ){
      player.items = tokens[2].split(', ')      
    }
    inventory.push(player)
  }
  console.log(JSON.stringify(inventory))
}

heroicInventory(['Isacc / 25 / Apple, GravityGun', 
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / ivo'])
