// var http = require('http'); //node 底层 核心
// var qs = require('querystring');
// var request = require('request');

// let url = "http://192.168.1.103:1314";

// for (let i = 0; i < 10; i++) {
//     request(url, function(error, response, data) {
//         if (!error) {
//             console.log(data)
//         }

//     });
// }

const cluster = require('cluster');
const http = require('http');
const cpuNums = require('os').cpus().length;
if (cluster.isMaster) {
    for (let i = 0; i < cpuNums; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker) => {
        console.log(`worker${worker.id} exit.`)
    });
    cluster.on('fork', (worker) => {
        console.log(`fork：worker${worker.id}`)
    });
    cluster.on('listening', (worker, addr) => {
        console.log(`worker${worker.id} listening on ${addr.address}:${addr.port}`)
    });
    cluster.on('online', (worker) => {
        console.log(`worker${worker.id} is online now`)
    });
} else {
    http.createServer((req, res) => {
        console.log(cluster.worker.id);
        res.writeHead(200);
        res.end('hello world');
    }).listen(3000, '127.0.0.1');
}