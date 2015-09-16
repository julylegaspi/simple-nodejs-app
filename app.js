var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');
app.locals.pagetitle = 'NodeJS Website';
app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function(req, res){
	res.send('Not found');
});
var port = Number(process.env.PORT || 3000);
var server = app.listen(port,function(){
	console.log('Server is running ...');
});