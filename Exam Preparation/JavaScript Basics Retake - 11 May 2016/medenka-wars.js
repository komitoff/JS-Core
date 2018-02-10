function solve(input = []) {
  let naskorDamageDone = 0
  let victorDamageDone = 0
  let victorPrevAttack = 0
  let naskorPrevAttack = 0
  let naskorConsecutiveAttacks = 1
  let victorConsecutiveAtatcks = 1

  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(' ')
    let damage = Number(tokens[0])
    let attack = tokens[1]
    
    if (attack == 'white') {
      if (damage == victorPrevAttack) {
        victorConsecutiveAtatcks ++
      }
      if (victorConsecutiveAtatcks == 2 ) {
        victorDamageDone += 2.75 * damage * 60
        victorConsecutiveAtatcks = 1
        victorPrevAttack = damage * 4.5
      } else {
          victorDamageDone += damage * 60
          victorPrevAttack = damage
      }
    }
    else {
      if (damage == naskorPrevAttack) {
        naskorConsecutiveAttacks ++
      }

      if (naskorConsecutiveAttacks == 5) {
        naskorDamageDone += 4.5 * damage * 60
        naskorConsecutiveAttacks = 1
        naskorPrevAttack = damage * 4.5
      } else {
        naskorDamageDone += damage * 60
        naskorPrevAttack = damage
      }
    }
  }
  if (naskorDamageDone > victorDamageDone) {
    console.log(`Winner - Naskor`)
    console.log(`Damage - ${naskorDamageDone}`)
  } else {
    console.log(`Winner - Vitkor`)
    console.log(`Damage - ${victorDamageDone}`)
  }
}

//white - > Victor attacks; 2 in row = 2.75 crit
//dark -> Naskor attacks; 5 in row = 4.5 crit

solve(['5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas'])

solve([
    '2 dark medenkas',
'1 white medenkas',
'2 dark medenkas',
'2 dark medenkas',
'15 white medenkas',
'2 dark medenkas',
'2 dark medenkas'
])