var fs = require('fs'),
    path = require('path'),
    ext = process.argv[3];

fs.readdir(process.argv[2], function (err, list) {
    if (err) {
        console.log('filename not specified', err);
        return;
    }

    list.forEach(function (file) {
        if (path.extname(file) === '.' + ext) {
            console.log(file);
        }
    });
});
