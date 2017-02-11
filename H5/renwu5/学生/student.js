
	var x =parseInt(Math.random()*100);
	/*alert(x);
	alert(typeof(x));*/

	switch(true){
		case x>90 && x<=100:
		alert("该学生的成绩为："+x);
		alert("一等生");
		break;

		case x>80 && x<=90:
		alert("该学生的成绩为："+x);
		alert("二等生");
		break;

		case x>70 && x<=80:
		alert("该学生的成绩为："+x);
		alert("三等生");
		break;

		case x>60 && x<=70:
		alert("该学生的成绩为："+x);
		alert("四等生");
		break;

		case x>50 && x<=60:
		alert("该学生的成绩为："+x);
		alert("五等生");
		break;

		case x>40 && x<=50:
		alert("该学生的成绩为："+x);
		alert("六等生");
		break;

		case x>30 && x<=40:
		alert("该学生的成绩为："+x);
		alert("七等生");
		break;

		case x>20 && x<=30:
		alert("该学生的成绩为："+x);
		alert("八等生");
		break;

		case x>10 && x<=20:
		alert("该学生的成绩为："+x);
		alert("九等生");
		break;

		default:
		alert("该学生的成绩为："+x);
		alert("劝退");

	}
