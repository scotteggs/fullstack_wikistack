var express = require('express')
var router = express.Router()

module.exports = router




router.get('/', function (req, res, next) {
	res.send("this is the users page")
})


router.post('/', function (req, res, next) {
	res.send("this is a users post")
})


router.get('/add', function (req, res, next) {
	res.render('add user');
})