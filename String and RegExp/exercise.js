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

wordOccurences('how do you plan on achieving that? how? how can you even think of that?', 'h1ow')