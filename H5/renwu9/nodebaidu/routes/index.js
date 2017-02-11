var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var xss = require('xss');
// var html = xss('<script>alert(1);</script>');

/*在主页获取新闻的请求 */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var newstype = req.query.newstype;

  var connection = mysql.createConnection({
  		host:'localhost',
  		port:3306,
  		user:'root',
  		password:'',
  		database:'baidunews'
  });
  connection.connect();
  connection.query('SELECT * FROM news WHERE newstype = ?',[newstype],function(err,rows,fields){
  	// console.log(rows);
  	
  //   var xss = require('xss');
  // var html = xss('<script>alert("xss");</script>');
  res.json(rows);
  });
});

module.exports = router;
