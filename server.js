var http = require('http');
var server = http.createServer(function (req, res) {
	console.log("Request received");
    res.end("Hey, Thanks for calling!!");
}); 

server.listen(8080);