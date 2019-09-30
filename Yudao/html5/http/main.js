var http = require('http'); //node 底层 核心
var file = require('fs'); //引入文件库
var path = require('path') //文件路径模块
console.log(http);
//web服务的本质是 有n人访问网站 request 
//网站的开发者 ，响应用户的请求 res  问答



http.createServer(function(req, res) {
    console.log(req.url);

    // let ipList = [];
    // let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    // if (!!ipList[ip]) {
    //     ipList[ip] = ipList[ip] + 1;
    // } else {
    //     ipList[ip] = 1;
    // }

    if (req.url == '/images/sloth.png') {
        console.log('图片');
        res.writeHead(200, { "Content-Type": "image/png" });
        let imgStream = file.createReadStream(path.join(__dirname, 'sloth.png'));
        imgStream.pipe(res);
        return;
    }

    // res.write("欢庆70周年！");

    let fileStream = file.createReadStream(path.join(__dirname, 'index.html'));
    fileStream.pipe(res);
}).listen(1314)