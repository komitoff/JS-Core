var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
}).listen(9898);

console.log('Server is Running ^_^');