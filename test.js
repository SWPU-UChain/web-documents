const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'application/javascript;charset=utf-8'
        });
        res.end('function a(a={lll: 222}){console.log(a)}');
    }
});
// server
server.listen(8000, function () {
    console.log('listen to 8000');
});