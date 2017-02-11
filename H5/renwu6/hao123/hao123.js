function onload(){
	var theme = localStorage.color
	if(theme){
	var a181 =document.getElementById('18');
	a181.style.color=theme;
	// alert(a181.style.color);


	var a191 =document.getElementById('19');
	a191.style.color=theme;
	// alert(a181.style.color);


	var a201 =document.getElementById('20');
	a201.style.color=theme;
	// alert(a181.style.color);


	var a61 = document.getElementById('6');
		a61.style.background = theme;


	var a71 =document.getElementById('7');
		a71.style.borderTop = "2px solid"+" "+theme;
		a71.style.borderBottom="1px solid"+" "+theme;

	var a81 =document.getElementById('8');
		a81.style.borderTop = "2px solid"+" "+theme;
		a81.style.borderBottom="1px solid"+" "+theme;

	var a91 =document.getElementById('9');
		a91.style.borderTop = "2px solid"+" "+theme;
		a91.style.borderBottom="1px solid"+" "+theme;

	var a101 =document.getElementById('10');
		a101.style.borderTop = "2px solid"+" "+theme;
		a101.style.borderBottom="1px solid"+" "+theme;

	var a111 =document.getElementById('11');
		a111.style.borderTop = "2px solid"+" "+theme;
		a111.style.borderBottom="1px solid"+" "+theme;

	var a121 =document.getElementById('12');
		a121.style.borderTop = "2px solid"+" "+theme;
		a121.style.borderBottom="1px solid"+" "+theme;

	var a131 =document.getElementById('13');
		a131.style.borderTop = "2px solid"+" "+theme;
		a131.style.borderBottom="1px solid"+" "+theme;

	var a141 =document.getElementById('14');
		a141.style.borderTop = "2px solid"+" "+theme;
		a141.style.borderBottom="1px solid"+" "+theme;

	var a151 =document.getElementById('15');
		a151.style.borderTop = "2px solid"+" "+theme;
		a151.style.borderBottom="1px solid"+" "+theme;

	var a161 =document.getElementById('16');
		a161.style.borderTop = "2px solid"+" "+theme;
		a161.style.borderBottom="1px solid"+" "+theme;

	var a211 =document.getElementById('21');
		a211.style.border=" 1px solid"+" "+theme;
	}

}

onload()


// function ch(color){
// 	localStorage.getItem('color');
// }


// 变换主题
function changetheme(color){
	var a6 = document.getElementById('6');
		a6.style.background = color;


	var a7 =document.getElementById('7');	
		a7.style.borderTop = "2px solid"+" "+color;
		
		a7.style.borderBottom="1px solid"+" "+color;

	var a8 =document.getElementById('8');
		a8.style.borderTop = "2px solid"+" "+color;
		a8.style.borderBottom="1px solid"+" "+color;

	var a9 =document.getElementById('9');
		a9.style.borderTop = "2px solid"+" "+color;
		a9.style.borderBottom="1px solid"+" "+color;

	var a10 =document.getElementById('10');
		a10.style.borderTop = "2px solid"+" "+color;
		a10.style.borderBottom="1px solid"+" "+color;

	var a11 =document.getElementById('11');
		a11.style.borderTop = "2px solid"+" "+color;
		a11.style.borderBottom="1px solid"+" "+color;

	var a12 =document.getElementById('12');
		a12.style.borderTop = "2px solid"+" "+color;
		a12.style.borderBottom="1px solid"+" "+color;

	var a13 =document.getElementById('13');
		a13.style.borderTop = "2px solid"+" "+color;
		a13.style.borderBottom="1px solid"+" "+color;

	var a14 =document.getElementById('14');
		a14.style.borderTop = "2px solid"+" "+color;
		a14.style.borderBottom="1px solid"+" "+color;

	var a15 =document.getElementById('15');
		a15.style.borderTop = "2px solid"+" "+color;
		a15.style.borderBottom="1px solid"+" "+color;

	var a16 =document.getElementById('16');
		a16.style.borderTop = "2px solid"+" "+color;
		a16.style.borderBottom="1px solid"+" "+color;


		var a18 =document.getElementById('18');

		a18.style.color=color;

		var a19 =document.getElementById('19');

		a19.style.color=color;

		var a20 =document.getElementById('20');

		a20.style.color=color;

		var a21 =document.getElementById('21');
		a21.style.border="1px solid"+" "+color;


		localStorage.setItem("color",color);
	
}



