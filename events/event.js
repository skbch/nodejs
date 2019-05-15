var events = require('events');

var fs = require('fs');

var EventEmitter = new events.EventEmitter(); //实例化对象

// EventEmitter.on("kk",function(data){
//     console.log(data)
//         // console.log("接收到了广播")
// })

// setTimeout(function(){
//     // console.log("开始广播")
//     EventEmitter.emit("kk","我是你爸爸")
// },2000)



function add() {

    fs.readFile('./404.html', function (err, data) {
        EventEmitter.emit('data1', data)
    })
}


add()

EventEmitter.on("data1", function (data) {
    console.log(data.toString())

})
