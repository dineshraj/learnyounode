var http = require('http'),
    bl = require('bl'),
    results = [],
    count = 0;

function getData(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                console.log(err);
            }

            results[index] = data.toString();
            count++;

            if (count === 3) {
                for (var result in results) {
                    console.log(results[result]);
                }
            }
        }));
    });
}

for (var i = 0; i < 3; i++) {
    getData(i);
}
