var fs = require('fs');
var url = require('url')
var http = require('http')
var ejs = require('ejs')

http.createServer(function (req, res) {
   var method=req.method.toLowerCase()

    res.writeHead(200, {
        'Content-Type': "text/html;charset=utf-8"
    })
    // var da = "我是后台数据的,我也是ejs模板渲染的";
    // var list = ["呵呵哒", "赛瓦软件", 'nodejs'];
    var pathname = url.parse(req.url).pathname
    if (pathname == '/login') {
        ejs.renderFile('./form.ejs', {
            // pp: pp,
            // h: h
        }, function (err, data) {
            // console.log(data)
            res.end(data)
        })
    } else if (pathname == '/dologin' && method=='get') {
        var a=url.parse(req.url,true)
        // console.log(a)
        res.end('do login')
    } else if(pathname == '/dologin' && method=='post') {
        var str=''
        req.on('data',function(data){
            str+=data
        })

        req.on('end',function(err,data){
            fs.appendFile('login.txt',str+'\n',function(err,data){
                if(err) console.log(err);

                console.log("写入数据成功")
            })
            console.log(str)
            res.end("<script>alert('登陆成功');history.back()</script>")
        })



    }
     else {
    
        ejs.renderFile('./index.ejs', {}, function (err, data) {
            // console.log(data)
            res.end(data)
        })
    }

}).listen(3000)