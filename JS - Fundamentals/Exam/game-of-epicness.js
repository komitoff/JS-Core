function solve(a = [], b = []) {
  let kingdoms = new Map
  let winners = new Map
  for (let i = 0; i < a.length; i++) {
    let kingdom = a[i]
    if (!kingdoms.has(kingdom.kingdom)) {
      kingdoms.set(kingdom.kingdom, new Map)
    }

    if (!kingdoms.get(kingdom.kingdom).has(kingdom.general)) {
      kingdoms.get(kingdom.kingdom).set(kingdom.general, {army: kingdom.army, wins: 0, loses:0})
    }
    else {
      kingdoms.get(kingdom.kingdom).get(kingdom.general).army += kingdom.army
    }
  }

  for (let i = 0; i < b.length; i++) {
    let firstKingdom = b[i][0]
    let secondKingdom = b[i][2]
    let firstGeneral = b[i][1]
    let secondGeneral = b[i][3]

    if (kingdoms.has(firstKingdom) && kingdoms.has(secondKingdom)) {
      if (kingdoms.get(firstKingdom).has(firstGeneral) && kingdoms.get(secondKingdom).has(secondGeneral)) {
        let firstKingdomArmy = kingdoms.get(firstKingdom).get(firstGeneral).army
        let secondKingdomArmy = kingdoms.get(secondKingdom).get(secondGeneral).army
        if (firstKingdom == secondKingdom) {
          continue
        }
        if (!winners.has(firstKingdom)) {
          winners.set(firstKingdom, {wins: 0, loses: 0})
        }
        if (!winners.has(secondKingdom)) {
          winners.set(secondKingdom, {wins: 0, loses: 0})
        }
        if (firstKingdomArmy == secondKingdomArmy) {
          continue
        }

        if (firstKingdomArmy > secondKingdomArmy) {
          kingdoms.get(firstKingdom).get(firstGeneral).wins += 1
          kingdoms.get(firstKingdom).get(firstGeneral).army += kingdoms.get(firstKingdom).get(firstGeneral).army * 0.1
          winners.get(firstKingdom).wins += 1
          kingdoms.get(secondKingdom).get(secondGeneral).loses += 1
          kingdoms.get(secondKingdom).get(secondGeneral).army -= kingdoms.get(secondKingdom).get(secondGeneral).army * 0.1
          winners.get(secondKingdom).loses += 1
        } else {
          kingdoms.get(firstKingdom).get(firstGeneral).loses += 1
          kingdoms.get(firstKingdom).get(firstGeneral).army -= kingdoms.get(firstKingdom).get(firstGeneral).army * 0.1
          winners.get(secondKingdom).wins += 1
          kingdoms.get(secondKingdom).get(secondGeneral).wins += 1
          kingdoms.get(secondKingdom).get(secondGeneral).army += kingdoms.get(secondKingdom).get(secondGeneral).army * 0.1
          winners.get(firstKingdom).loses += 1
        }
      }
    }
  }

  if (kingdoms.size < 2) {
    [...kingdoms.entries()].forEach(x => {
      console.log(`Winner: ${x[0]}`);
      let generalMap = x[1];
      [...generalMap.entries()]
        .sort((c, d) => d[1].army - c[1].army)
        .forEach(y => {
          console.log(`/\\general: ${y[0]}`);
          console.log(`---army: ${y[1].army}`)
          console.log(`---wins: ${y[1].wins}`)
          console.log(`---losses: ${y[1].loses}`)
      })
    })
    return
  }
  let winner = [...winners.entries()]
    .sort((x, y) => {
      let firstWins = x[1].wins
      let secondWins = y[1].wins
      if (firstWins > secondWins) return -1
      if (secondWins > firstWins) return 1
      if (firstWins == secondWins) {
        if (x[1].loses > y[1].loses) return 1
        if (x[1].loses > y[1].loses) return -1
        if (x[1].loses == y[1].loses) {
          return x[0].localeCompare(y[0])
        }
      }
    }).shift()[0]
    let winnerObj = kingdoms.get(winner);
    console.log('Winner: ' + winner);

    [...winnerObj.entries()]
      .sort((z, u) => u[1].army - z[1].army)
      .forEach(m => console.log(`/\\general: ${m[0]}\n---army: ${parseInt(m[1].army)}\n---wins: ${m[1].wins}\n---losses: ${m[1].loses}`))
}

solve([{ kingdom: "Maiden Way", general: "Merek", army: 5000 }],
[ [] ])