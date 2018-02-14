//#1. Split a String with a Delimiter
function splitString(text, delimiter) {
  text.split(delimiter).forEach(element => {
      console.log(element)
  })
}

//#2.  Repeat a String N Times
function repeatStrings(text, count) {
  console.log(text.repeat(count))
}

//#3. Check if String starts with a given Substring.
function checkStart(text, start) {
  console.log(text.startsWith(start))
}

//# 4. Check if String ends with given Substring.
function checkEnd(text, end) {
  console.log(text.endsWith(end))
}

//#6 Capture the Numbers
function captureNumbers(arr) {
  let regex = new RegExp(/(\d+)/g)
  let text = ''
  for (let i = 0; i < arr.length; i++) {
    text = text.concat(arr[i])
  }

  let matches = text.match(regex)
  console.log(matches.join(' '))
}

//#    7. Find Variable Names in Sentences
function findVariables(text) {
  let regex = new RegExp(/(\b_[a-zA-Z0-9]+)/g)
  console.log(
    text.match(regex).map(e => e.slice(1)).join(',')
  )
}

//#08. Word Occurences
function wordOccurences(text, word) {
  let regex = new RegExp('\\b' + word.toLowerCase() + '\\b', 'gmi' )
  let lowerText = text.toLowerCase()
  let occurences = lowerText.match(regex)
  console.log(occurences ? occurences.length : 0)
}

//#9 * 09. Extract Links
function extractLinks ( input = []){
  const regex = /www\.[A-Za-z0-9\-]+(\.([\a-z]+)){1,}/gm
  let result =[]
  while (match = regex.exec(input)) {
    result.push(match[0])
  }
  console.log(result.join('\n'))
}

//#10** 16/100
function replaceSecret(arr = []) {
  let text = ''
  for (let i = 0; i < arr.length; i++) {
    text = text.concat(arr[i] + '\n')
  }

  let regex = new RegExp(/(\+[0-9-]+)|(\*[a-zA-Z]+)|(\![a-zA-Z0-9]+)|(\_[a-zA-Z0-9]+)/, 'gm')
  let removeEmptyLinesRegex = new RegExp(/^\s*\n/gm)
  let match = text.match(regex)

  if (!match)
    return

  for (let i = 0; i < match.length; i++) {
    text = text.replace(match[i], '|'.repeat(match[i].length))
  }
  let trimmedText = text.replace(removeEmptyLinesRegex, '')
  console.log(trimmedText)
  text.replace()
}
//10** 100/100
function secretData(input = []) {

  let nameRegex = /\*[A-Z][A-Za-z]*(?=\s|\t|$)/g
  let numberRegex = /\+[0-9-]{10}(?=\s|\t|$)/g
  let IdRegex = /![a-zA-Z0-9]+(?=\s|\t|$)/g
  let baseRegex = /_[0-9A-Za-z]+(?=\s|$)/g


  for (const row of input) {
    console.log(
      row.replace(nameRegex, x => '|'.repeat(x.length))
      .replace(numberRegex, x => '|'.repeat(x.length))
      .replace(baseRegex, x => '|'.repeat(x.length))
      .replace(IdRegex, x => '|'.repeat(x.length))
    )
  }
}


secretData(['Agent *Ivankov was in the room when it all happened.',
'The person in the room was heavily armed.',
'Agent *Ivankov had to act quick in order.',
'He picked up his phone and called some unknown number.\n',
'I think it was +555-49-796' ,
'I can\'t really remember...\n' ,
'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21\n' ,
'Then after that he disappeared from my sight.\n' ,
'As if he vanished in the shadows.\n' ,
'A moment, shorter than a second, later, I saw the person flying off the top floor.\n' ,
'I really don\'t know what happened there.\n' ,
'This is all I saw, that night.\n'])