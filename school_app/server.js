// set up ======================================================================
var express = require('express');
// create our app w/ express
var app = express();                                                                 
// mongoose for mongodb
var mongoose = require('mongoose');   
// set the port                                      
var port = process.env.PORT || 3000;   
// load the database config                            
var database = require('./config/database'); 
app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));  


// configuration ===============================================================
// connect to mongoDB database on modulus.io
mongoose.connect(database.url);         

app.configure(function() {
		// set the static files location /public/img will be /img for details
        app.use(express.static(__dirname + '/public'));                 
		// log every request to the console
        app.use(express.logger('dev'));             
		// pull information from html in POST
        app.use(express.bodyParser());                                                     
		// simulate DELETE and PUT
        app.use(express.methodOverride());                                                 
});
                     

app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
// routes ======================================================================
require('./app/routes.js')(app);
// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);