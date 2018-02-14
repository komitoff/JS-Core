var http = require('http');
var port = 1234;

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/JSON'
    });
    res.write(JSON.stringify(http));
    res.end();
}).listen(port);

console.log('Server is Running ^_^ on port : ' + port);