//引入 http 模块

var http=require('http');
var str=require('common.js')
http.createServer(function(req,res){
        console.log(req.url)
        res.writeHead(200,{'Content-Type': "text/html;charset=utf-8"})
        // res.write('<head><meta charset="utf-8"/></head>'); 
        res.write("我是老王的爸爸");
        // res.write(str)
        console.log(str)
        res.end()
}).listen(8008)

