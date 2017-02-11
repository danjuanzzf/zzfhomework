var http = require('http');

http.createServer(function(request,respond){
	respond.writeHead(200,{
		'Content-Type':'text/plain'
	});
	respond.end('He1ll3o2 World\n');
}).listen(1337,"127.0.0.1");

console.log('Server running at http:/127.0.0.1:1337/');