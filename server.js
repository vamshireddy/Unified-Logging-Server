// BASE SETUP
// =============================================================================

var Bear     = require('./app/models/bear');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8082;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! Amit!!!!!!!!!!!!!!!!!!!!!!!!!!!!  welcome to our api!' });   
    });
router.get('/vservers', function(req, res) {
    res.json({ message: 'hooray! Amit!!!!!!!!!!!!!!!!!!!!!!!!!!!!  welcome to our api!' });   
    });
router.get('/events', function(req, res) {
    res.json({ message: 'hooray! Vamshi!!!!!!!!!!!!!!!!!!!!!!!!!!!!  welcome to our api!' });   
    });
router.get('/servers', function(req, res) {
    res.json({ message: 'hooray! Vamshi!!!!!!!!!!!!!!!!!!!!!!!!!!!!  welcome to our api!' });   
    });
router.get('/services', function(req, res) {
    res.json({ message: 'hooray! Vamshi!!!!!!!!!!!!!!!!!!!!!!!!!!!!  welcome to our api!' });   
    });
router.get('/monitors', function(req, res) {
    res.json({ message: 'hooray! Vamshi!!!!!!!!!!!!!!!!!!!!!!!!!!!!  welcome to our api!' });   
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
