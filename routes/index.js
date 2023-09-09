var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '안녕하세요!', pageName:'home.ejs'}); // view에 index.ejs 파일
});

module.exports = router;
