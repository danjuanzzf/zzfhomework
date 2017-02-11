$(document).ready(function(){
	var deviceWidth = $('body').width();
	$('nav li').each(function(index,item){
		if($(this).find('a').html().split('').length>2){
			$(this).width(deviceWidth/3);
		}else{
			$(this).width(deviceWidth/6);
		}
	});

	refreshNews("");
	$('nav a').click(function(e){
		e.preventDefault();
		var type = $(this).text();
		console.log(type);
		refreshNews(type);
	})

});

function refreshNews(type){
	$.ajax({
		url:'/news',
		type:'get',
		datatype:'json',
		/*下面的type后加了双引号*/
		data:{newstype:type},
		success:function(data){
			console.log(data);

			var $lists = $('article ul');
			$lists.empty();
			data.forEach(function(item,index,array){
			
			
			var $list = $('<li></li>').addClass('news-list').prependTo($lists);
			var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
			var $img = $('<img>').attr('src',item.newsimg).appendTo($newsImg);
			var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
			var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
			var $p = $('<p></p>').appendTo($newsContent);
			var newsTime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
			var $newsSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);

			})

			
			}
	});

	
}