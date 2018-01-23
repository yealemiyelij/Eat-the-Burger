/*Wondu Mamo, https://github.com/yealemiyelij |1 author(Wondu Mamo)*/
var mysql= require('mysql');
var connection;

if(process.env.JAWSDB_URL){
    connection= mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection=mysql.createConnection({
        root:3002,
        host:'localhost',
        user:'root',
        password:'root',
        database:'burgers_db'

    });
};

connection.connect(function(err){
    if(err){
        console.log('error connecting: '+ err.stack);
        return;

    }else {
        console.log('connected as Id '+ connection.threadId);
    }
});

module.exports= connection;