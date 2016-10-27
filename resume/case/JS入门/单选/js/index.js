/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-21 12:04:29
 * @version $Id$
 */

;(function(){
	/*默认选中第一个*/
	$("li").eq(0).addClass("active");

	$("li").click(function(){
		$("li").removeClass("active");
		$(this).addClass("active");
	})
})();