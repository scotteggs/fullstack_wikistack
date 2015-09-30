var express = require('express')
var router = express.Router()
var Promise = require('bluebird')
module.exports = router


var models = require('../models/');
var Page = models.Page; 
var User = models.User; 


router.post('/', function(req, res, next) {
  var page = new Page({
    //name: req.body.name,
    //email: req.body.email,
    title: req.body.title,
    content: req.body.content,
    status: req.body.status,
  });
  page.save()
  	.then(function (result) { res.redirect(result.route) })
  	.then(null, next);
});


router.get('/', function(req, res, next) {
  res.redirect('/');
});


router.get('/add', function (req, res, next) {
	res.render('addpage');
})


router.get('/:urlTitle', function (req, res, next) {
  Page.findOne({ urlTitle: req.params.urlTitle }).populate("author").exec().then(function(foundPage){
    res.render('wikipage', foundPage)
    //res.json(foundPage)
  }).catch(next); // assuming you replaced mpromise
});