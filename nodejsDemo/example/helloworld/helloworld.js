var http = require('http');
console.log('server start...');
http.createServer((req, res) => {
    if (/^\/abc\/$/.test(req.url)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write("error");
        res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(req.url);
        res.end();
    }
}).listen(2016);