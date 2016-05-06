var fs = require('fs'),
    path = require('path'),
    filtered;

module.exports = function (dir, ext, callback) {

    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err);
        }

        filtered = list.filter(function (filename) {
            return path.extname(filename) === '.' + ext;
        });

        callback(null, filtered);
    });
}
