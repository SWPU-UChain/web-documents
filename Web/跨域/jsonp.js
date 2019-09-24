function jsonp(url, data) {
    let params = '';
    for (let key in data) {
        if (params === ''){
            params = '?';
        }
        params = params + key + '=' + data[key] + '&';
    }
    url = url + params.slice(1);
    const script = document.createElement('script');
    script.type = 'javascript';
    let body = document.getElementsByTagName('body');
    body.appendChild(script);
}
jsonp({ll: '22', pp: '333', callback: '_jsonp'});

/*
* jsonp跨域实现的两种方式：
*   1、onload实现跨域
*   2、服务端配合实现跨域
*
*   example:
*   1、index.html
*       <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
        </head>
        <body>
        </body>
        <script>
            let script = document.createElement('script');
            script.src = 'http://localhost:8000/';
            script.onload = function (data) {
                console.log(data);
                a();
            };
            document.body.appendChild(script);
        </script>
        </html>
    * 2、server.js
    *   const http = require('http');
        const server = http.createServer((req, res) => {
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
* */

