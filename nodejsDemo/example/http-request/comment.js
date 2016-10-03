var http = require('http');
var queryString = require('queryString');
var postData = queryString.stringfy({
    'content': 'aa',
    'cid': 124
});
var options = {
    hostname: 'www.baidu.com',
    port: 80,
    path: '/',
    method: 'POST',
    headers: {}
}
var req = http.requset(options, function (res) {
    console.log('Status:' + res.status);
    console.log('headers:' + res.headers);
    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    res.on('end',function(){
        console.log('comment is ok');
    });
});
req.on('error',function(error){
    console.log(error);
});
req.write(postData);