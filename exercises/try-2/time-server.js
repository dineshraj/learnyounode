var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
    var time = strftime('%F %R');

    socket.end(time + "\n");
});

server.listen(Number(process.argv[2]));
