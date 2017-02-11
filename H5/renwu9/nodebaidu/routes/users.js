var express = require('express');
var router = express.Router();


//
	// var xss = require('xss');
	// var html = xss('<script>alert(1);</script>');

var mysql = require('mysql');
var connection = mysql.createPool({
	host:'localhost',
  	port:3306,
  	user:'root',
  	password:'',
  	database:'baidunews'
});

/* 后台管理页面 */
//获取列表
router.get('/getnews', function(req, res, next) {
  // res.send('respond with a resource');
  // var newstype = req.query.newstype;
  	connection.query('SELECT * FROM news',function(err,rows){
  		res.json(rows);
  	});
});

//更新确认
router.post('/update',function(req,res){
	var newsid = req.body.id,
		newstype = req.body.newstype,
		newstitle = req.body.newstitle,
		newstime = req.body.newstime,
		newssrc = req.body.newssrc,
		newsimg = req.body.newsimg;
	connection.query('UPDATE news SET newstitle=?,newstype =?,newsimg=?,newstime=?,newssrc=? WHERE id=?',[newstitle,newstype,newsimg,newstime,newssrc,newsid],function(err,rows){
		console.log(rows.changedRows);
		res.json("ok");
	});
});

//模态框取值


router.get('/curnews',function(req,res){
  // res.send('respond with a resource');
  // var newstype = req.query.newstype;
  	
  	var newsid = req.query.newsid;
  	connection.query('SELECT * FROM news WHERE id =?',[newsid],function(err,rows){
  		res.json(rows);
  	});
});


//删除
router.post('/delete',function(req,res){
	var newsid = req.body.newsid;
	connection.query('DELETE FROM `news` WHERE `news`.`id`=?',[newsid],function(err,result){
		console.log(result.affectedRows);
		res.json("ok");
	});
});

//插入
router.post('/insert',function(req,res){
	var newstype = req.body.newstype,
		newstitle = req.body.newstitle,
		newsimg = req.body.newsimg,
		newstime = req.body.newstime,
		newssrc = req.body.newssrc;
	connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)',[newstitle,newstype,newsimg,newstime,newssrc],function(err,result){
			if(!err){
				console.log(result.insertId);
				res.json("ok");
			}
	});

});

module.exports = router;
