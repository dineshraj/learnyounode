var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    if (request.method !== "GET") {
        return response.end('needs to be a GET request');
    }

    response.writeHead(200, { 'Content-Type': 'application/json' })

    var urlObject = url.parse(request.url, true);
    var d = new Date(urlObject.query.iso);

    if (urlObject.pathname === '/api/parsetime') {
        var res = JSON.stringify(
            {
                hour: d.getHours(),
                minute: d.getMinutes(),
                second: d.getSeconds()
            }
        );
        response.write(res);
        response.end();
    } else if (urlObject.pathname === '/api/unixtime') {
        var res = JSON.stringify({
            unixtime: d.getTime()
        });
        response.write(res);
        response.end();
    }
});

server.listen(process.argv[2]);
