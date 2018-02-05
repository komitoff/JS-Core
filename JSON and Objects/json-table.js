function generateTable (input) {
  console.log('<table>')
  for (let i = 0; i < input.length; i++) {
    let obj = JSON.parse(input[i])
    console.log('\t<tr>')
    for (let key in obj) {
      console.log(`\t\t<td>${obj[key]}</td>`)
    }
    console.log('\t<tr>')
  }
  console.log('</table>')
}   

generateTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'])