/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-24 17:31:07
 * @version $Id$
 */
;(function(){

	var len = $(".point>span").length;
/*给每个span加自定义属性*/
	$(".point>span").each(function(index,item){
		$(item).attr("num1",index+1)
	}).hover(function(){		/*鼠标移入每个span显示缩略图 */
		$(".dis").css({
			"display":"block",
			"left":$(this).position().left-38,
			"top":"-70px",
			"background": "url('./img/"+$(this).attr("num1")+".png') no-repeat,url('./img/minBg.png') no-repeat",
			"background-size": "94px 62px,94px 68px"
		})
	},function(){
		$(".dis").css("display","none");
	}).click(function(){
		$(".cont>img").attr("src","./img/"+$(this).attr("num1")+".png");
		$(".point>span").removeClass("act");
		$(this).addClass("act");
		n = $(this).attr("num1");
	})

var n = 1;
/*点击下一张*/
$(".next").click(function(){
	n++;
	if(n>5) n=1;
	$(".cont>img").attr("src","./img/"+n+".png");
	$(".point>span").removeClass("act");
	$(".point>span").eq(n-1).addClass("act");
})

/*点击上一张*/
$(".prev").click(function(){
	n--;
	if(n<1) n=5;
	$(".cont>img").attr("src","./img/"+n+".png");
	$(".point>span").removeClass("act");
	$(".point>span").eq(n-1).addClass("act");
})




})();
