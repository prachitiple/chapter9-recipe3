var http = require('http');

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

var server = http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Hello World!!');
});

server.listen(port,ip);
console.log('Server running at http://%s:%d',ip,port);