var express = require('express')
var app = express()
var fs = require('fs')
var mime = require('mime')
var bodyParser = require('body-parser')
var morgan = require('morgan')


var swig = require('swig')
app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', process.cwd() + '/views')
swig.setDefaults({cache: false});

// logging middleware manual
// app.use(function (req, res, next) {
// 	res.on('finish', function () {
// 		console.log(req.method, req.path, res.statusCode);
// 	});
// 	next();
// });

app.use(morgan('tiny'));

// static file middleware
app.use(function(req, res, next) {
  var mimeType = mime.lookup(req.path)
  fs.readFile('./public/' + req.path, function(err, fileBuffer) {
    if(err) return next()
    res.header('Content-Type', mimeType)
    res.send(fileBuffer)
  })
})

app.use(bodyParser.urlencoded({ extended: true }))

app.use(require('./routes'))











app.listen(3000)