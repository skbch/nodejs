var fs = require('fs');
var url = require('url')
var http = require('http')
var ejs = require('ejs')

http.createServer(function (req, res) {
    
    res.writeHead(200, {
        'Content-Type': "text/html;charset=utf-8"
    })
    var da="我是后台数据的,我也是ejs模板渲染的";
    var list=["呵呵哒","赛瓦软件",'nodejs'];
    var pathname = url.parse(req.url).pathname
    if (pathname == '/login') {
        ejs.renderFile('./index.ejs', {msg:da,list:list}, function (err, data) {
            // res.end(data)
        })
    } else if (pathname == '/reg') {
       var pp="这是注册页面";
       var h='<h2>呵呵哒</h2>'
       ejs.renderFile('./reg.ejs',{pp:pp,h:h},function(err,data){
        console.log(data)
        res.end(data)
       })
    } 
    
}).listen(3000)