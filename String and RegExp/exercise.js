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

captureNumbers(['The300  What is that?','  I think it’s the 3rd movie.' , 'Lets watch it at 22:45'])