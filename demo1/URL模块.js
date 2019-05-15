//引入 http 模块

var http=require('http');
var url=require('url');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': "text/html;charset=utf-8"})
  
    var pathname=req.url
    console.log("pathname:"+pathname)



        if(req.url !=='/favicon.ico'){
            var query=url.parse(req.url,true)  //第一个参数是地址,第二而过参数true表示把get 传值改转换为对象
        // console.log(query.query.id) //获取url的get传值
        // console.log(query.query.age) //获取url的get传值

      






        if(query.query.id=='pp'){
            console.log("呵呵哒")
        }
        }
        
        // res.write('<head><meta charset="utf-8"/></head>'); 
      
        res.write("我是老王的爸爸");
        res.end()
}).listen(8008)

