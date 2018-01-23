/*Wondu Mamo, https://github.com/yealemiyelij |1 author(Wondu Mamo)*/
var express= require('express');
var bodyParser= require('body-parser');
var methodOverride= require('method-override');
var app= express();


 app.use(express.static(process.cwd()+ '/public'));// state content for an app from public directory

 app.use(bodyParser.urlencoded({extended:false}));

 app.use(methodOverride('_method')); // override with post having _Method= delete;

 var exphbs= require('express-handlebars');

 app.engine('handlebars', exphbs({
     defaultLayout:'main'
 }));

 app.set('view engine', 'handlebars');

 var routes= require('./controllers/burgers_controller.js');
 app.use('/', routes);

 var port = process.env.PORT ||3002;
 app.listen(port);

