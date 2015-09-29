var express = require('express')
var router = express.Router()
var Promise = require('bluebird')
module.exports = router




var models = require('../models/');
var Page = models.Page; 
var User = models.User; 







router.post('/', function(req, res, next) {

		res.json(req.body)
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  var page = new Page({
    name: req.body.name,
    email: req.body.email,
    title: req.body.title,
    content: req.body.content,
    status: req.body.status,
  });






  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save()
  	.then(function () { res.redirect('/') })
  		
});








router.get('/', function(req, res, next) {
  res.redirect('/');
});



router.get('/add', function (req, res, next) {
	res.render('addpage');
})
