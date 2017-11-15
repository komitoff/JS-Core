const http = require('http')
const fs = require('fs')
const mongodb = require('mongodb')

let con = 'mongodb://localhost:27017/users'
let query = require('querystring')

let port = 1225
let indexPage = '';




fs.readFile('./index.html', 'utf8', (err, data) =>{
  indexPage = data
})
http.createServer((req, res) => {
  if(req.url === '/' && req.method === 'GET') {
    res.writeHead(200)
    res.write(indexPage)
    res.end()
  }

  if (req.url === '/' && req.method === 'POST') {
      let body = ''
      req.on('data', (data) => { body += data })
      req.on('end', () => {
          let parsedBody = query.parse(body)
          console.log(parsedBody)
          mongodb.MongoClient.connect(con, (err, db) => {
            if (err) {
                console.log(err)
                return
            }  
          
            var users = db.collection('users')
            users.insert({username : parsedBody.username, password : parsedBody.password})

            users.find().toArray((err, data) => {
                if (err) {
                    console.log(err)
                    return
                }

                console.log(data)
            })
          })
      })
  }
}).listen(port)