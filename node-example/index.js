console.log(15 + 3);
const fs = require('fs')

fs.readFile('index.js', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }

    console.log(data)
    console.log('Finished')
})


