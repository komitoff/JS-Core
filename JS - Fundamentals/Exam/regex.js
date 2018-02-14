function solve(input) {
  let validFormatRegex = new RegExp(/<svg>(.|\n)*?<\/svg>/gm)
  let labelRegex = new RegExp(/<svg><cat><text>.*\[(.*)\]<\/text><\/cat><cat>.*<\/cat><\/svg>/gm)
  let votesRegex = new RegExp(/<g><val>(\d{0,})<\/val>(\d{0,})<\/g>/gm)
  let tagsCnt = new RegExp(/(<cat>)/gm)

  let label = ''
  let labelInfo = labelRegex.exec(input)
  let validation = validFormatRegex.exec(input)
  let totalSum = 0
  let count = 0
  let cnt = 0

  if (validation == null) {
    console.log('No survey found')
    return
  }

  while(t = tagsCnt.exec(input)) {
    cnt ++
  }
  if (labelInfo == null || cnt > 2) {
    console.log('Invalid format')
    return
  }
  else {
    label = labelInfo[1]
    input = validation[0]
    let votes
    while(votes = votesRegex.exec(input)) {
      let key = Number(votes[2])
      let value = Number(votes[1])
      totalSum += (key * value)
      count += key
    }
  }
  let average = totalSum / count
  console.log(`${label}: ${(Math.round(average * 100)) / 100}`)
}

solve("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>")