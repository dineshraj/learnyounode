fs = require('fs');
path = require('path');
ext = process.argv[3];
indexes = [];

fs.readdir(process.argv[2], function (err, list) {

    if (err) {
        console.log(err);
    }

    list.forEach(function (file) {
        if (path.extname(file) === '.' + ext) {
            console.log(file);
        }
    });

});
