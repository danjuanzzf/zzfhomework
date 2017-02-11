var t = document.getElementById('text1');/* 显示框*/	

var i7 = document.getElementById('21');/*输入数字*/
var i8 = document.getElementById('22');/*输入数字*/
var i9 = document.getElementById('23');/*输入数字*/
var i4 = document.getElementById('31');/*输入数字*/
var i5 = document.getElementById('32');/*输入数字*/
var i6 = document.getElementById('33');/*输入数字*/
var i1 = document.getElementById('41');/*输入数字*/
var i2 = document.getElementById('42');/*输入数字*/
var i3 = document.getElementById('43');/*输入数字*/
var i0 = document.getElementById('51');/*输入数字*/

var operate = 0; /*判断输入状态的标志 */
var numshow = 0;
var num = 0; 
var result = 0; 
var quit = 0;

function cleartext(){
	// var t = document.getElementById('text1');
	t.value = '';
	quit = 0;
}

function inputnum(num){
	// t.value = num;
	var str=String(t.value); /*获得当前显示数据 */
	str=(str!="0") ? ((operate==0) ? str : "") : ""; /*如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; */
	str=str + String(num); //给当前值追加字符 
	t.value=str; /*刷新显示 */
	operate=0; //重置输入状态 
}


function calculate(){ 
	numshow=Number(t.value); 
	if(num!=0 && quit!=1){ //判断前一个运算数是否为零以及防重复按键的状态 
		switch(calcul){ //判断要输入状态 
		case 1:result=num+numshow;break; //计算"+" 
		case 2:result=num-numshow;break; //计算"-" 
		case 3:result=num*numshow;break; 
		case 4:if(numshow!=0){result=num/numshow;}else{cleartext();alert("被除数不能为零！");} break; 
		case 5:result=num%numshow;break; 		 
		default : quit=1; //避免重复按键 
		}	
	} 
	else{ 
	result=numshow; 
	}
	numshow = String(parseFloat(result.toFixed(8)));

	// numshow = String(result); 
	t.value = numshow; 
	num=result; //存储当前值 
} 


function equal(){ 
calculate(); //等于 
operate = 1; 
num = 0; 
result = 0; 
numshow = "0"; 
// quit = 0;
} 

function plus(){ //加法 

calculate(); //调用计算函数 
operate=1; //更改输入状态 
calcul=1; //更改计算状态为加 
} 

function minus(){ //减法 
calculate(); 
operate=1; 
calcul=2; 
} 
function mul(){ //乘法 
calculate(); 
operate=1; 
calcul=3; 
} 
function divide(){ //除法 
calculate(); 
operate=1; 
calcul=4; 
} 
function persent(){ //求余 
calculate(); 
operate=1; 
calcul=5; 
} 

function dot(){ 
var str=String(t.value); 
str=(str!="0") ? ((operate==0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
for(i=0; i<=str.length;i++){ //判断是否已经有一个点号 
if(str.substr(i,1)==".") return false; //如果有则不再插入 
} 
str=str + "."; 
t.value=str; 
operate=0; 
} 


/*求倒数*/ 
function daoshu(){
	var a =Number(t.value);
	if(a!=0){result=1/a;}else{alert("0没有倒数!")}
	operate = 1;
	t.value = String(parseFloat(result.toFixed(8)));
	
}


/*切换正负*/
function zf(){
	var a =Number(t.value);
	if(a>0){
		result = (-(a));
	}else{
		result = (-(a));
	}
	operate = 1;
	t.value = String(parseFloat(result.toFixed(8)));
}

/*求开方*/ 
function kf(){
	var a =Number(t.value);
	if(a>=0){
		result=Math.sqrt(a);
	}else{
		alert("负数不能求开方!")
	}
	operate = 1;
	t.value = String(parseFloat(result.toFixed(8)));
}

/*求sin*/ 
function sn(){
	var a =Number(t.value);
	if(a>=0){
		result=Math.sin(a*Math.PI/180);
	}else{
		result = (Math.sin(a*Math.PI/180));
	}
	operate = 1;
	t.value = String(parseFloat(result.toFixed(8)));
}


/*求cos*/ 
function cs(){
	var a =Number(t.value);
	if(a>=0){
		result=Math.cos(a*Math.PI/180);
	}else{
		result = (Math.cos(a*Math.PI/180));
	}
	operate = 1;
	t.value = String(parseFloat(result.toFixed(8)));
}