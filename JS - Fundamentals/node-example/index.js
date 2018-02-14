const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 7869

http.createServer((req, res) => {
    let path = url.parse(req.url).path

    if (path === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                console.log(err)
                return
            }

            res.writeHead(200, {
                'Content-Type' : 'text/html'
            })
            res.write(data)
            res.end()
        })
    } else {
        res.writeHead(404);
        res.write('Page not found!')
        res.end()
    }
})
.listen(port)

console.log(`Server is running on port ${port} ...`)
