var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var commentsModel = mongoose.model('commentsModel');
var articlesModel = mongoose.model('articlesModel');
var multer  = require('multer');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('blog');
});

router.get('/input', function(req, res, next) {
  res.render('inputs');
});

var storage = multer.diskStorage({
	destination: function(req, file, callback){
		var path = __dirname + '/../public/uploads';
		callback(null, path);
	},
	filename: function(req, file, callback){
		console.log(file);
		callback(null, file.originalname);
	}
});

var upload = multer({
	storage: storage
});

router.post('/new', upload.any(), function(req, res, next){
	var model = new articlesModel();
	var nameOfFiles0 = req.files[0].originalname;

	model.title = req.body.title;
	model.body = req.body.body;
	model.img0 = 'http://' + req.headers.host + '/uploads/' + nameOfFiles0;

	model.save(function(err){

		if(err){ return next(err); }

		console.log('saved');
		res.redirect('/');

	})
});

module.exports = router;
