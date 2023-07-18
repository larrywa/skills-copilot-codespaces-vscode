// create web server
var express = require('express');
var app = express();

// set static path
app.use(express.static('public'));

// set view engine
app.set('view engine', 'ejs');

// set port
app.listen(3000);
console.log('Server is listening at port 3000...');

// get path
app.get('/', function(request, response) {
	response.render('index');
});