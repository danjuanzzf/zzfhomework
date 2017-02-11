

// var a = new Array();

// a=["a","x","b","d","m","a","k","m","p","j","a"];

// alert(a);
// var count =0;
// var c = new Array();

// var b = new Array();
// for(var i=0;i<a.length;i++){
// 	// 少写一句
// 	if(a[i]!=-1){
// 	b=a[i];

// 		for(var j=0;j<a.length;j++){
// 			if (b==a[j]) {

// 			count++;
// 			a[j]=-1;
// 			}
// 		}
// 		c.push(b+":"+count+"次");
// 		count=0;
// 	}
// }	
// 	var d = new Array();
// 	for(var k=0;k<c.length;k++){
// 		alert(c[k].count);

// 	}


// 	alert(c);
	



var a = new Array();


 a=["a","x","b","d","m","a","k","m","p","j","a"];
 sa(a);

function sa(a){
	var obj={};
	var num=0;
	var count;
	var k;

	for(var i=0;i<a.length;i++){
		k=a[i];
		/*判断次数*/ 
		if (obj[k]) {
			obj[k].count++;
			obj[k].index.push(i);
		}else{
			obj[k]={
				count:1,
				index:[i]
			}
		}
		/*判断最大值*/ 
		if (obj[k].count>num) {
			num=obj[k].count;
		}
	}
	/* 输出*/
	for (k in obj) {
		if (obj[k].count == num){
			alert('出现次数最多的字母：'+k+'\n'+'出现次数：'+num+'\n'+'所在位置为'+obj[k].index);
		}
	}
}








