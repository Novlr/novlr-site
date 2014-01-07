var express = require('express')
var jade = require('jade')
var fs = require('fs')

var app = express();

// Configuring Express.js to use Jade and include the static folders
app.set('view engine', 'jade')
app.set('views', './templates')
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));
app.use(express.favicon(__dirname + '/favicon.ico')); 

// Route each of the get requests
app.get('/', function(req, res) {
  res.render('index-home', {title: 'Welcome to Novlr', subheading: 'Novel writing. Simply.', path: req.path})
})

app.get('/about', function(req, res) {
  res.render('index', {	title: 'How to write a novel', 
  						path: req.path, 
  						h1: 'About Novlr'
  						//, body: 'includes/about.jade'
  						})
})

app.get('/features', function(req, res) {
  res.render('index', {
  						title: 'Novlr makes novel writing simple.', 
  						path: req.path, h1: 'We make novel writing simple.', 
  						h2: 'the intro to features', 
  						body: 'includes/features.jade'
  						})
})

app.get('/pricing', function(req, res) {
  res.render('index', {
  						title: 'Free Novel Writing Software', 
  						path: req.path, h1: 'Novel writing. Simply.', 
  						h2: 'the intro to pricing', 
  						body: 'includes/pricing.jade'
  						})
})
app.listen(8889)

// Always set this as the last get request, any pages not defined will give this
app.get('*', function(req, res){
  res.render('404.jade')
});
