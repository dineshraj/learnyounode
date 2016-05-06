var fs = require('fs');
var path = require('path');
var filteredList = [];

module.exports = function (file, ext, callback) {

    fs.readdir(file, function (err, list) {
        if (err) {
            return callback(err);
        }

        list.forEach(function (file) {
            if (path.extname(file) === '.' + ext) {
                filteredList.push(file);
            }
        });

        callback(null, filteredList);
    });
}
