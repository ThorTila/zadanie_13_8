var http = require('http'),
	fs = require('fs'),
	server = http.createServer();

server.on('request', function (request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");

	 switch (true) {
		case request.method === 'GET' && request.url === '/':
			response.write(fs.readFileSync('./index.html', 'utf-8'));
			response.end();
			break;

		default:
			response.setHeader("Content-Type", "image/png");
			response.statusCode = 404;
			response.write(fs.readFileSync('./images/404.png'));
			response.end();
	}

});

server.listen(8080);