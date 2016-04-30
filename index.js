var net=require('net');

var client=new net.createConnection(6000, 'localhost', function () {

});

setTimeout(function(){
    console.log('Timeout0');
    client.write('write');
}, 100);

//client.write('hello');
//console.log('Send: hello');
//client.write('world');
//console.log('Send: world');

client.on('error', function(err){
    console.log('Client Error');
    console.log(err);
});

client.on('connect', function(){
    console.log('New connection');
    console.log(arguments);
});

client.on('close', function(){
    console.log('Connection closed');
    console.log(arguments);
});

client.on('data', function(data){
    console.log(data.toString());
});

setTimeout(function(){
    console.log('Timeout1');
    client.write('write');
}, 1000);

setTimeout(function(){
    console.log('Timeout2');
    client.write('write');
}, 2000);

//var counter=0;
//setInterval(function(){
//    client.write('ping'+counter++);
//}, 1000);