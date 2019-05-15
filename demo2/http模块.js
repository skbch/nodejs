//引入 http 模块

var http=require('http');
// var str=require('common.js')
var sd=require('silly-datetime')
var md5=require('md5-nodejs')
http.createServer(function(req,res){
        console.log(req.url)
        res.writeHead(200,{'Content-Type': "text/html;charset=utf-8"})
        // res.write('<head><meta charset="utf-8"/></head>');
       if(req.url!=='/favicon.ico'){
        var d=sd.format(new Date(),'YYYY-MM-DD HH:mm:ss') 
        res.write("我是老王的爸爸"+d);
        console.log(md5('admin'))

       }


        
        // res.write(str)
        // console.log(str)
        res.end()
}).listen(8008)

