/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-23 21:53:55
 * @version $Id$
 */
;(function(){

	var arr = ["差","较差","还行","推荐","力荐"];
	var onOff = false;

	$(".start>span").each(function(index,item){
		$(item).attr("data",index+1);
	}).click(function(){
		onOff = true;
		$(".start>span").attr("check","");
		$(".start>span:lt("+$(this).attr("data")+")").attr("check","true");
	}).hover(function(){
		onOff = false;
		$(".start>span").removeClass("act");
		$(".start>span:lt("+$(this).attr("data")+")").addClass("act");
		$(".tip").html(arr[$(this).attr("data")-1]);
	},function(){
		if(onOff){		//点击
			$(".start>span:lt("+$(this).attr("data")+")").addClass("act");
		}else{			//没有点击
			$(".start>span:lt("+$(this).attr("data")+")").removeClass("act");
			$(".tip").html("");
			$(".start>span").each(function(index,item){
				if($(item).attr("check")){
					$(item).addClass("act");
				}
			})
		}
	})
})();
