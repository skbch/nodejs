var fs = require('fs');

//检测文件是否是文件或者目录
// fs.stat('fs.js',function(err,stats){
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log('文件'+stats.isFile()) //
//     console.log('目录'+stats.isDirectory()) 

// })


//创建文件夹  fs.mkdir()

// fs.mkdir('css',function(err){
//     if(err){
//         console.log(err);
//         return false
//     }
//     console.log("创建成功");
//     // fs.writeFile('css/t.txt','我是老王的爸爸',function(err){
//     //     if(err){
//     //         console.log(err)
//     //         return false
//     //     }
//     //     console.log('写入文件成功')
//     // })
// })



//写入文件  fs.writeFile()
// var a='青青真可爱'
// fs.writeFile('t.txt','青青真可爱',function(err){

//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log('写入文件成功')
// })


//追加文件   fs.appenFile ,如果存在就在后面追加,如果不存在就创建

// fs.appendFile('t.txt','\n我是你男神',function(err){
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log("追加成功")
// })


//读取文件  readFile

// fs.readFile('t.txt',function(err,scuess){
//     if(err){
//         console.log(err)
//         return false
//     }else{
//         // console.log(scuess) //打印的是一个16进制的 buffer,如果想得到文本内容就用 tostring()

//     console.log(scuess.toString())
//     }

// })



//服务目录   readDir


// fs.readdir('html',function(err,data){
//         if(err){
//         console.log(err)
//         return false
//     }
//     console.log(data)
// })



//fs.rename   1.重命名,2.剪切文件

// fs.rename('t.txt','sk.txt',function(err){
//             if(err){
//         console.log(err)
//         return false
//     }
//     console.log("文件重命名成功")
// })


// fs.rename('sk.txt','css/sk.txt',function(err){
//                 if(err){
//         console.log(err)
//         return false
//     }
//     console.log("文件移动成功")
// })


//删除目录  fs.rmdir

// fs.rmdir('css', function (err) {
//     if (err) {
//         console.log(err)
//         return false
//     }
//     console.log("目录删除成功") //前提是这个目录必须为空
// })


//删除文件   fs.unlink

// fs.unlink('sk.txt', function (err) {
//     if (err) {
//         console.log(err)
//         return false
//     }
//     console.log("删除文件成功") 
// })


