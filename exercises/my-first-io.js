var fs = require('fs'),
    file = fs.readFileSync(process.argv[2]),
    fileString = file.toString(),
    fileArray = fileString.split('\n');

console.log(fileArray.length - 1);
