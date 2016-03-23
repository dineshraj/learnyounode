var bl = require('bl'),
    http = require('http');

http.get(process.argv[2], function (response) {

    response.pipe(bl(function (err, data) {
        if (err) {
            console.log(err);
        }
        data = data.toString();

        console.log(data.length);
        console.log(data);
    }));

});
