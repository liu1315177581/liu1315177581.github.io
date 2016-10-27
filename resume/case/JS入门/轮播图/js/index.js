/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-20 21:32:24
 * @version $Id$
 */

console.log($("#box"))
;(function(){

/*声明变量区域*/
	var n = 0;
	var arr = ["img/1.png","img/2.png","img/3.png","img/4.png"];
	var arrTitle = ["第一张图片","第二张图片","第三张图片","第四张图片"];


/*初始化函数*/
	function init(){
		$(".num").html('1/'+arr.length);
		$("img").attr({src:arr[n]});
		$(".singleTitle").html(arrTitle[n]);
		$(".title").html("图片可从最后一张跳转到第一张循环切换")
	}

	function rander(){
		$(".num").html((n+1)+"/"+arr.length);
		$("img").attr({src:arr[n]});
		$(".singleTitle").html(arrTitle[n]);
	}

	init();		//初始化页面
	
/*循环切换*/
	$("button:first").click(function(){
		$('button').removeClass("active");
		$(this).addClass("active");
		$(".title").html("图片可从最后一张跳转到第一张循环切换");
	})

	$("button:last").click(function(){
		$('button').removeClass("active");
		$(this).addClass("active");
		$(".title").html("图片可从第一张切换到最后一张");
	})

/*上一张*/
	$(".prev").click(function(){
		n--;
		if(n < 0 ){
			if(!$("button:first").hasClass("active")){
				alert("已经是第一张了");
				n = 0;
			}else{	//循环播放
				n = arr.length-1;
			}
		}
		rander();
	})


/*下一张*/
	$(".next").click(function(){
		n++;
		if( n > arr.length-1 ){
			if(!$("button:first").hasClass("active")){
				alert("已经是最后一张了");
				n=arr.length-1;
			}else{	//循环播放
				n = 0;
			}
		}
		rander();
		
		
	})

})();