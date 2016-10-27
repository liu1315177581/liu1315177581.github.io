/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-23 21:53:55
 * @version $Id$
 */

;(function(){
	var n = 0;
	$(".list li>i").click(function(){
		$(this).toggleClass("sel");
		if($(this).hasClass("sel")){
			n++;
		}else{
			n--;
		}
		if(n === $(".list li").length){
			$(".select li>i").addClass("sel");
		}else{
			$(".select li>i").removeClass("sel");
		}
	})
	$(".select li>i").click(function(){
		$(this).toggleClass("sel");
		if($(this).hasClass("sel")){
			$(".list li>i").addClass("sel");
			n = $(".list li").length;
		}else{
			$(".list li>i").removeClass("sel");
			n = 0;
		}
	})
})();