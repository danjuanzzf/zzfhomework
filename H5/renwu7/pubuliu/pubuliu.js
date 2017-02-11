$(document).ready(function(){
	mying();


var dataImg = {"data":[{"src":"1.png"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]}

/*鼠标滚动监听*/ 
window.onscroll = function(){
	if (scrollside()) {
		$.each(dataImg.data,function(index,value){
				var box = $("<div>").addClass("box").appendTo($(".contain"));
				var pic = $("<div>").addClass("pic").appendTo(box);
				$("<img>").attr("src",$(value).attr("src")).appendTo(pic)
		});
		mying();
	}
};

});


window.onresize=function(){
	mying();
}


function scrollside(){
	var a = $(".box")
	var lastboxHeight = a.last().get(0).offsetTop+Math.floor(a.last().height()/2);
	var documentHeight = $(document).width();
	var scrollHeight = $(window).scrollTop();
	return (lastboxHeight<scrollHeight+documentHeight)?true:false;

}

function mying(){
	var a = $(".box");
	var imgWidth = $(".box").eq(0).width();
	// alert(imgWidth);
	/*获取一排摆放图片的个数*/ 
	var num = Math.floor($(window).width()/imgWidth);
	var boxheightarr=[];
	a.each(function(index,value){
		// console.log(index+"----"+value);
		/*遍历每张图片的高度*/ 
		var aheight = a.eq(index).height();
		if (index<num) {
			boxheightarr[index] = aheight;
			// console.log(boxheightarr[index]);
			$(value).css({
				'position':'relative',
				'top':0,
				'left':0
			});
		}else{
			/*获取最矮图片的高度*/ 
			var minaheight = Math.min.apply(null,boxheightarr);
			// console.log(minaheight);
			/*获取最矮图片的位置*/ 
			var minaindex = $.inArray(minaheight,boxheightarr);
			// console.log(minaindex);
			$(value).css({
				'position':'absolute',
				'top':minaheight,
				'left':a.eq(minaindex).position().left
			});
			/*新放的图片高度加到最小高度上*/ 
			boxheightarr[minaindex]+=a.eq(index).height();
		}
	});
}

