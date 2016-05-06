var http = require('http');
var bl = require('bl');
var count = 0;
var dataArray = [];

function readUrl(url) {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.log(err);
            }

            dataArray.push(data);
            count++;
            if (count === 3) {
                dataArray.forEach(function (item) {
                    console.log(item.toString());
                });
            }
        }));
    })
}

function init() {
    for (var i = 2; i < 5; i++) {
        readUrl(process.argv[i]);
    }
}

init();
