var express = require('express');
var router = express.Router();

var content = '<p class="wow fadeInUp"' + 'data-wow-delay="1s" >' + "Copyright &copy; 2016 PABLO'S HARDWOOD FLOOR | " + 
                '<a href="http://luisconstante.com"' + 'title="Awesome Web Development"' + ' target="_blank">' + 'Webmaster</a></p>'

var nav = '<div class="navbar navbar-default navbar-fixed-top" role="navigation">'+
    '<div class="container">' +

      '<div class="navbar-header">'+
        '<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">' +
          '<span class="icon icon-bar"></span>' +
          '<span class="icon icon-bar"></span>' +
         ' <span class="icon icon-bar"></span>' +
        '</button>' +
        '<a href="/" class="navbar-brand smoothScroll">James Consulting</a>' +
      '</div>' +
        '<div class="collapse navbar-collapse">' +
          '<ul class="nav navbar-nav navbar-right">' +
            '<li><a href="/about" class="smoothScroll"><span>About</span></a></li>' +
            '<li><a href="/gallery" class="smoothScroll"><span>Gallery</span></a></li>' +
            '<li><a href="/contact" class="smoothScroll"><span>Contact</span></a></li>' +
          '</ul>' +
       '</div>' +
	'</div>' +
  '</div>';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', footer: content , navbar : nav});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express', footer: content , navbar : nav});
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { link: 'Contact Us', footer: content , navbar : nav});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express', footer: content , navbar : nav});
});

module.exports = router;
