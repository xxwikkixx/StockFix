var fs = require('fs')
var csvWriter = require('csv-write-stream')

var writer = csvWriter({ headers: ["hello", "foo"]})
writer.pipe(fs.createWriteStream('out.csv'))
writer.write(['world', 'bar'])
writer.end()