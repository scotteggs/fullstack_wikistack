var express = require('express')
var app = express()
var fs = require('fs')
var mime = require('mime')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var swig = require('swig')
var mainRouter = require('./routes/index.js')
var wikiRouter = require('./routes/wiki.js')
var usersRouter = require('./routes/users.js')

// point res.render to the proper directory
app.set('views', __dirname + '/views');
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files
// have it use swig to do so
app.engine('html', swig.renderFile);
// turn of swig's caching
swig.setDefaults({cache: false});

app.use(express.static(__dirname + '/public'));

// app.use(express.static('views'));


//loging middleware
app.use(morgan('tiny'));




app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', mainRouter);
app.use('/wiki', wikiRouter);
app.use('/users', usersRouter);











app.listen(3000)








// static file middleware
// app.use(function(req, res, next) {
//   var mimeType = mime.lookup(req.path)
//   fs.readFile('./public/' + req.path, function(err, fileBuffer) {
//     if(err) return next()
//     res.header('Content-Type', mimeType)
//     res.send(fileBuffer)
//   })
// })