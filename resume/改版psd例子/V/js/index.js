/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-20 11:25:15
 * @version $Id$
 */

;(function(){
	var num = 5;
	var n = 0;
	//定义空的变量
	var str = "";
	//用for生成上结构
	for(var i = 0; i < num; i++){
		if(i<num/2){
			str += '<li style="top: '+i*50+'px;left: '+i*50+'px;"></li>';
		}else{
			str += '<li style="top: '+(num-1-i)*50+'px;left: '+i*50+'px;"></li>';
		}
	}
	//将str赋给页面结构
	$("#list").html(str);

	$("button").click(function(){
		n++;
		$("#list").css({"transform":"rotate("+n*90+"deg)","transition": "1s"});
		// if(n>3) n=0;
	});
})();
