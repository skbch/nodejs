//读取数据流,对于数据比较大的可以使用

// var fs=require('fs');

// var readStream=fs.createReadStream('index.txt');

// var str='';
// var count=0
// readStream.on('data',function(chunk){
//     str+=chunk;
//     count++
// })  


// readStream.on('end',function(chunk){
//     console.log(count)
//     // console.log(str);
    
// })  

// readStream.on('error',function(error){
//     console.log(error)
// })



//写入流
var fs=require('fs');

var data="我的酒馆对你打了样11"

var writeStream=fs.createWriteStream('index1.txt')
writeStream.write(data,'utf8')
writeStream.end()