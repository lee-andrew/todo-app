const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

// Require the routes file we created
var todos_routes = require('./routes/todos_routes');
var activeFilter_routes = require('./routes/activeFilter_routes');
var selectOptions_routes = require('./routes/selectOptions_routes');
var idCount_routes = require('./routes/idCount_routes');
var completedCount_routes = require('./routes/completedCount_routes');
var input_routes = require('./routes/input_routes');
var title_routes = require('./routes/title_routes');

// Parses the text of incoming requests as JSON 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow cross-domain requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
	
// Tell the app to use our route modules to handle HTTP requests that start with '/api/'
app.use('/api/', todos_routes);	
app.use('/api/', activeFilter_routes);
app.use('/api/', selectOptions_routes);	
app.use('/api/', idCount_routes);
app.use('/api/', completedCount_routes);	
app.use('/api/', input_routes);	
app.use('/api/', title_routes);	

app.listen(PORT,function(){
	console.log('Server Started on http://localhost: ' + PORT);
	console.log('Press CTRL + C to stop server');
});
