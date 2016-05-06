fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var data = buffer.toString();

data = data.split('\n');

console.log(data.length - 1);
