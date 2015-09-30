var express = require('express')
var router = express.Router()
var Promise = require('bluebird')
module.exports = router

var models = require('../models/');
var Page = models.Page; 
var User = models.User; 



router.get('/', function (req, res, next) {
  Page.find().exec()
    .then(function(pages) {
      console.log(pages)
      res.render('index', pages)
    }).catch(next);
});












// // get a single tweet
// router.get('/users/:name/tweets/:id', function(req, res, next) {
//   req.params.id = Number(req.params.id)
//   // get tweet by that id
//   // make sure to also get the user
//   Tweet.findById(req.params.id, {include: [User]})
//   .then(function (tweet) {
//     res.render('index',{ tweets: [tweet]})
//   })
//   .catch(next)
//   // .catch(function (err) {
//   //   next(err);
//   // })
// })

// // home
// router.get('/', function(req, res, next) {
//   Tweet.findAll({include: [User]})
//   .then(function (tweets) {
//     res.render('index', { tweets: tweets, showForm:true })
//   });
// })

// // getting all tweets from user
// router.get('/users/:name', function(req, res, next) {
//   // res.json(tweets)
//   // find the user
//   // find all tweets by that user
//   User.findOne({where: {name: req.params.name}})
//   .then(function (user) {
//     // console.log('user', JSON.stringify(user, null, 2));
//     var promiseForTweets = Tweet.findAll({where: {UserId: user.id}, include: [User]})
//     return promiseForTweets;
//     // user.getTweets()
//   })
//   .then(function (tweets) {
//     // console.log('tweets', JSON.stringify(tweets, null, 2));
//     res.render('index', { tweets: tweets })
//   })
// })

// // make a tweet
// router.post('/', function(req, res, next) {
//   // res.status(201).json(tweetbank.add(req.body.name, req.body.tweet))
//   // find the user
//   // if they don't exist, create them
//   // create a tweet for that user
//   // once created, redirect home
//   User.findOne({where: {name: req.body.name}})
//   .then(function (user) {
//     // may or may not have a user
//     if (user) {
//       return user;
//     } else {
//       return User.create({name: req.body.name});
//     }
//   })
//   .then(function (user) {
//     // definitely have a user
//     return Tweet.create({tweet: req.body.tweet, UserId: user.id})
//   })
//   .then(function () {
//     res.redirect('/')
//   });
// })












