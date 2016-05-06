var http = require('http');
var bl = require('bl');
var streamData;

http.get(process.argv[2], function(response) {

    response.pipe(bl(function (err, data) {

        if (err) {
            return console.log(err);
        }

        var data = data.toString();
        console.log(data.length);
        console.log(data);
    }));


});
