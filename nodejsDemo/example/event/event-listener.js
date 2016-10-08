var EventEmitter=require('events').EventEmitter;
var girl = new EventEmitter();
girl.setMaxListeners(15);

girl.on('eat',function(){
    console.log('eat');
})
girl.on('eat',function(){
    console.log('eat');
})
girl.on('eat',function(){
    console.log('eat');
})
girl.on('eat',function(){
    console.log('eat');
})
girl.on('eat',function(){
    console.log('eat');
})
girl.on('eat',function(){
    console.log('eat');
})
girl.on('eat',function(){
    console.log('eat');
})
girl.on('eat',function(){
    console.log('eat');
})
girl.on('eat',function(){
    console.log('eat');
})
girl.on('eat',function(){
    console.log('eat');
})
girl.on('eat',function(){
    console.log('eat');
})
girl.on('eat',function(){
    console.log('eat');
})
girl.on('eat',function(){
    console.log('eat');
})
girl.on('eat',function(){
    console.log('eat');
})
girl.on('eat',function(){
    console.log('eat15');
})


girl.on('play',function(){
    console.log('play');
})
var eat = girl.emit('eat');
var play = girl.emit('play');
var smile =girl.emit('smile');
console.log('-----------');
console.log(eat);
console.log(play);
console.log(smile);
console.log('-----------');
console.log('1 event count:'+girl.listeners('eat').length);
console.log('2 event count:'+EventEmitter.listenerCount(girl,'eat'));
girl.removeAllListeners();
//girl.removeAllListeners('eat');
//girl.removeListeners('eat',eat);
console.log('2 event count:'+EventEmitter.listenerCount(girl,'eat'));
console.log('-----------');