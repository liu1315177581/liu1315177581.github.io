/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-24 14:12:08
 * @version $Id$
 */

;(function(){
	$("button").click(function(){

		var img = $(".printBox>img").attr("src");	//获取时A还是B
		var val = $("input").val().trim();		//获取输入框的值

		if(val === "") {
			$("input").val("");
			return;
		}

		if(img === "./img/1.png"){	//A
			var $li = $("<li>1</li>")
			$li.addClass("clear").html('<img src="./img/1.png" alt="A" class="fl"><span class="fl l">'+val+'</span>');
			$(".list").append($li);
		}else{						//B
			var $li = $("<li>1</li>")
			$li.addClass("clear").html('<img src="./img/2.png" alt="B" class="fr"><span class="fr r">'+val+'</span>');
			$(".list").append($li);
		}
		$("input").val("");
	})
	

	$(".printBox>img").click(function(){
		var img = $(this).attr("src");
		if(img === "./img/1.png"){
			$(this).attr("src","./img/2.png")
		}else{
			$(this).attr("src","./img/1.png")
		}
	})
})();


