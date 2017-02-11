$(document).ready(function(){

/*更多产品显示*/ 

$(".moreproduct").hover(function(){
		$(this).css({
			'background':'white',
			'color':'black',
			'height':'650px'
		});
		$(".md1").show();
},function(){
		$(this).css({
			'background':'#38f',
			'color':'white',
			'height':'17px'
		});
		$(".md1").hide();
});

/*皮肤显示*/ 
$(".a03").mouseenter(function(){
		$(".theme").show().css({
			'top':'30px',
		});
});

/*皮肤隐藏*/ 
$(".theme").mouseout(function(){
		$(".theme").hide();
});



});

var JSONObject= {
"gz":"这里是我的关注",
"tj":"我是推荐的内容啊",
"dh":"我是导航的内容啊",
"sp":"我是视频的内容啊",
"gw":"我是购物的内容啊"};


/*换肤函数*/
function changeTheme(color){
	var b1 =document.getElementById("body1");

	b1.style.background=color;
	localStorage.setItem('color',color);
}

/*localStorage本地存储*/ 
function onload(){
	var a = localStorage.getItem('color');
	var b1 =document.getElementById("body1");
	if (a) {
		b1.style.background=a;
	}
}


onload();
/*我的关注显示*/ 
$(".s01").mouseenter(function(){
		$(this).css({
			'background':'#9a9da2',
		});
});

/*我的关注隐藏*/ 
$(".s01").mouseout(function(){
	// $(this).hide();
		$(this).css({
			'background':'white',
		});
});

/*我的关注显示*/ 
$(".s02").mouseenter(function(){
		$(this).css({
			'background':'#9a9da2',
		});
});

/*我的关注隐藏*/ 
$(".s02").mouseout(function(){
	// $(this).hide();
		$(this).css({
			'background':'white',
		});
});

/*我的关注显示*/ 
$(".s03").mouseenter(function(){
		$(this).css({
			'background':'#9a9da2',
		});
});

/*我的关注隐藏*/ 
$(".s03").mouseout(function(){
	// $(this).hide();
		$(this).css({
			'background':'white',
		});
});

/*我的关注显示*/ 
$(".s04").mouseenter(function(){
		$(this).css({
			'background':'#9a9da2',
		});
});

/*我的关注隐藏*/ 
$(".s04").mouseout(function(){
	// $(this).hide();
		$(this).css({
			'background':'white',
		});
});

/*我的关注显示*/ 
$(".s05").mouseenter(function(){
		$(this).css({
			'background':'#9a9da2',
		});
});

/*我的关注隐藏*/ 
$(".s05").mouseout(function(){
	// $(this).hide();
		$(this).css({
			'background':'white',
		});
});

$(".s01").click(function(){
		document.getElementById("try11").innerHTML=JSONObject.gz;
});
$(".s02").click(function(){
		document.getElementById("try11").innerHTML=JSONObject.tj;
});
$(".s03").click(function(){
		document.getElementById("try11").innerHTML=JSONObject.dh;
});
$(".s04").click(function(){
		document.getElementById("try11").innerHTML=JSONObject.sp;
});
$(".s05").click(function(){
		document.getElementById("try11").innerHTML=JSONObject.gw;
});



