
//nodejs 默认是异步的,例如如下代码,输出的是   1 3 2

var fs=require('fs');

// console.log(1)

// fs.readFile('../404.html',function(err,data){
//     console.log(2)
// })

// console.log(3)






// 下面是读取不了里面的值呢
// function add(){
//     fs.readFile('../404.html',function(err,data){
       
//         return data
//     })
// }

// console.log(add())


//采用回调函数来解决

function add(callback){
    fs.readFile('../404.html',function(err,data){
       
    
        callback(data)
    })
}




add(function(result){
   console.log(result.toString())
})

