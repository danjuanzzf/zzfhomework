


/*计算*/
function ca(){
	var x1=document.getElementById(1);
	var x2=document.getElementById(3);
	var x3=document.getElementById(5);
	var o=document.getElementById(2);


	if (o.value=='/' && x2.value=='0') {
		alert("除数不能为0");

	}else if (x1.value==''||x2.value==''||o.value==''){
	
		alert("请输入数字及符号");
		}else {
			x3.value =  eval(parseFloat(x1.value) + o.value + parseFloat(x2.value));
			
			var t =Number(x3.value);

			/*保留两位小数*/ 
			x3.value=t.toFixed(2);	

		}
}


/* 清空*/
function cleara(){
// 	x1=document.getElementById(1);
// x2=document.getElementById(3);
// x3=document.getElementById(5);
	x1.value=null;
	x2.value=null;
	x3.value=null;
}