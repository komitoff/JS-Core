function solve(input = []) {
  let goldExRate = 67.51
  let bitcoinRate = 11949.16

  let totalMoney = 0
  let totalBitcoin = 0
  let day = 0
  let dayOfFirstBitcoin = false

  for (let i = 0, j = 1; i < input.length; i++, j++) {
    let gold = Number(input[i])
    if (j % 3 == 0) {
      gold = (gold) - (gold * 0.3)
    }

    let money = gold * goldExRate
    totalMoney += money

    if (totalMoney >= bitcoinRate) {
      while(totalMoney >= bitcoinRate) {
        totalMoney -= bitcoinRate
        totalBitcoin ++
      }

      if (!dayOfFirstBitcoin) {
        dayOfFirstBitcoin = true
        day = j
      }
    }
  }

  console.log('Bought bitcoins: ' + totalBitcoin)
  if (day) 
    console.log('Day of the first purchased bitcoin: ' + day)
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}

solve(['1', '1', '1'])