var http = require('http');

var userCount = 2;
http.createServer(function (request, response) {
    console.log('New connection');
    userCount = userCount*userCount;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.write('We have had '+userCount+' visits!\n');
    response.end();
}).listen(8080);

console.log('Server started');
