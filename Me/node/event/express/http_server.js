var http = require('http')

http.createServer((req, res) => {
    console.log('connecting success!');
    res.write('hello');
    res.end();
}).listen(5555, '192.168.1.103');