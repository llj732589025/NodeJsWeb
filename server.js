
var http = require('http');
var server=http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('Hello, world!');
}).listen(process.env.PORT,function () {
    var address = server.address();
    console.log("\r\n启动http服务  %j", address);
});