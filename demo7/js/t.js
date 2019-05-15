var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path')

http.createServer(function (req, res) {
    var pathname = req.url;
    if (pathname == '/') {
        pathname = '/index.html'
    }
    if (pathname != '/favicon.ico') {
        fs.readFile('.././'+pathname, function (err, data) {
            if (err) {
                fs.readFile('../404.html', function (err, data) {
                    if (err) {
                        console.log(err)
                    } else {
                        res.writeHead(200, {
                            "Content-Type":"text/html;charset='utf-8'"
                        })
                        res.write(data)
                        res.end()
                    }
                })
            }
            else {
                var g = tt(pathname);
                res.writeHead(200, {
                    "Content-Type": g + ";charset=utf-8"
                })
                res.write(data)
                res.end()
            }
        })
    }
}).listen(3000)



function tt(pathname) {
    if (pathname.indexOf('jpg', 'png') != -1) {
        return 'image/' + path.extname(pathname).replace('.', '')
    } else {
        return 'text/' + path.extname(pathname).replace('.', '')
    }
}