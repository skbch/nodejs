var url = require('url')
var http = require('http')
var fs = require('fs')
var path = require('path')

http.createServer(function (req, res) {

    var pathname = req.url;
    if (pathname == '/') {
        pathname = '/index.html';
    }
   
    function tt(pathname){
        if(pathname.indexOf('jpg','png')!=-1){
            return 'image/'+path.extname(pathname).replace('.','')
        }else{
            return 'text/'+path.extname(pathname).replace('.','')
        }
       
    }
 
 
 
    
    // console.log(tt)

    if (pathname != '/favicon.ico') {

        fs.readFile('.././' + pathname, function (err, data) {
            if (err) {
                // console.log('404');
                fs.readFile('../404.html', function (err, dat) {
                    if (err) {
                        console.log(err);

                    } else {
                        var g=tt('404.html')
                        console.log(g)
                        res.writeHead(200, {
                            'Content-Type':g+';charset="utf-8"' })
                           
                        res.write(dat)
                        res.end()
                    }
                })

            } else {
                var g=tt(pathname)
                console.log(g)
                res.writeHead(200, {

                    'Content-Type':g+';charset="utf-8"' 
                })
                res.write(data)
                res.end()
            }

        })
    }








}).listen(3000)