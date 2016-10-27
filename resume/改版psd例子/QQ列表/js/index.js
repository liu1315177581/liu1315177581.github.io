/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-20 15:34:29
 * @version $Id$
 */


;(function(){

	$(".title").click(function(){
		$(this).toggleClass("active");
		if ($(this).hasClass("active")) {
			$(".list").hide();
			$(".title").removeClass("active");

			$(this).addClass("active");
			$(this).next().show("slow");
		}else{
			$(this).next().hide("slow");
		}
	})


})();
