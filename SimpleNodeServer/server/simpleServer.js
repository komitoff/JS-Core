var http = require('http');
var port = 1234;

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('Hello');
    res.write('<html><ul><li>Simple Imtem</li></ul></html>')
    res.end();
}).listen(port);

console.log('Server is Running ^_^ on port : ' + port);