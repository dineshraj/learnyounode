var http = require('http');
var map = require('through2-map');


server = http.createServer(function (request, response) {
    if (request.method != 'POST') {
        return response.end('needs a post request');
    }

    var streamData = request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    }));

    streamData.pipe(response);
    server.close();
});

server.listen(process.argv[2]);
