$(document).ready(function(){
	var deviceWidth = $('body').width();
	$('nav li').each(function(index,item){
		if($(this).find('a').html().split('').length>2){
			$(this).width(deviceWidth/3);
		}else{
			$(this).width(deviceWidth/6);
		}
	});
});