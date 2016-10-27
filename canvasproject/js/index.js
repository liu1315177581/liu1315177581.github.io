;(function($a){
	jQuery.noConflict();
	$a.fn.fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4']
	})

	function canvasN(ele,targetP){
		targetP = targetP || window;
		this.element = $a(ele);
		this.width = $a(targetP).width();
		this.height = $a(targetP).height();
		this.ctx;
		this.arr = [];
		this.arr1 = [];
		this.x = 0;
		this.y = 0;
		this.X = 0;
		this.Y = 0;
		this.init();
	}
	canvasN.prototype = {
		constructor:canvasN,
		init:function(){
			this.element[0].width = this.width;
			this.element[0].height = this.height;
			this.ctx = this.element[0].getContext('2d');
			for(var i = 0; i<this.width; i = i+this.width/20){
				for(var j = 0; j<this.height; j = j+this.height/20){
					var px = i + Math.random()*this.width/20;
					var py = j + Math.random()*this.height/20;
					var p = {px,py};
					this.arr.push(p);
				}
			}
			var i = 0;
			while(i<250){
				var num = Math.floor(Math.random()*this.arr.length);
				this.arr1[i] = this.arr[num];
				i++;
			}
			for(var i = 0; i<this.arr1[i]; i++){
				this.arr1[i].onOff = true;
			}
			this.drawArc();
			window.addEventListener('mousemove', $a.proxy(this.mouseMove,this));
		},
		drawArc:function(a,b){
			
			a = a ? -a/5 : 1;
			b = b ? -b/5 : 1;
			this.ctx.clearRect(0,0,this.width,this.height);
			for(var i = 0; i<this.arr1.length; i++){

				this.ctx.beginPath();//丢弃任何当前定义的路径并且开始一条新的路径。它把当前的点设置为 (0,0)。
				
				if(i%2){
					if(this.arr[i].onOff){
						this.arr1[i].px-=0.2*a;
					}else{
						this.arr1[i].px+=0.2*a;
					}
					
					if(b !== 1){
						if(this.arr[i].onOff){
							this.arr1[i].py += 0.3*b;
						}else{
							this.arr1[i].py += 0.03*b;
						}
						
					}
					if(this.arr1[i].px<0){
						this.arr[i].onOff = false;
					}else if(this.arr1[i].px>this.width){
						this.arr[i].onOff = true;
					}
					if(this.arr[i].onOff){
						this.ctx.arc(this.arr1[i].px, this.arr1[i].py, 1, 0, 2 * Math.PI, false);
						this.ctx.fillStyle = 'rgba(132,131,133,.1)';
					}else{
						this.ctx.arc(this.arr1[i].px, this.arr1[i].py, 1, 0, 2 * Math.PI, false);
						this.ctx.fillStyle = 'rgba(132,131,133,1)';
					}
					
				}else if(i%3){
					
					if(this.arr[i].onOff){
						this.arr1[i].px-=0.1*a;
					}else{
						this.arr1[i].px+=0.1*a;
					}
					if(b !== 1){
						if(this.arr[i].onOff){
							this.arr1[i].py += 0.06*b;
						}else{
							this.arr1[i].py += 0.1*b;
						}
					}
					if(this.arr1[i].px<0){
						this.arr[i].onOff = false;
					}else if(this.arr1[i].px>this.width){
						this.arr[i].onOff = true;
					}
					if(this.arr[i].onOff){
						this.ctx.arc(this.arr1[i].px, this.arr1[i].py, 1, 0, 2 * Math.PI, false);
						this.ctx.fillStyle = 'rgba(132,131,133,.3)';
					}else{
						this.ctx.arc(this.arr1[i].px, this.arr1[i].py, 1, 0, 2 * Math.PI, false);
						this.ctx.fillStyle = 'rgba(132,131,133,.2)';
					}
					
					
				}else if(i%5){
					
					if(this.arr[i].onOff){
						this.arr1[i].px+=0.1*a;
					}else{
						this.arr1[i].px-=0.1*a;
					}
					if(b !== 1){
						if(this.arr[i].onOff){
							this.arr1[i].py -= 0.1*b;
						}else{
							this.arr1[i].py -= 0.1*b;
						}
					}
					if(this.arr1[i].px<0){
						this.arr[i].onOff = true;
					}else if(this.arr1[i].px>this.width){
						this.arr[i].onOff = false;
					}
					if(this.arr[i].onOff){
						this.ctx.arc(this.arr1[i].px, this.arr1[i].py, 1, 0, 2 * Math.PI, false);
						this.ctx.fillStyle = 'rgba(132,131,133,.3)';
					}else{
						this.ctx.arc(this.arr1[i].px, this.arr1[i].py, 1, 0, 2 * Math.PI, false);
						this.ctx.fillStyle = 'rgba(132,131,133,.2)';
					}
					
				}else{
					
					if(this.arr[i].onOff){
						this.arr1[i].px+=0.2*a;
					}else{
						this.arr1[i].px-=0.2*a;
					}
					if(b !== 1){
						this.arr1[i].py += 0.3*b;
					}
					if(this.arr1[i].px<0){
						this.arr[i].onOff = true;
					}else if(this.arr1[i].px>this.width){
						this.arr[i].onOff = false;
					}
					if(this.arr[i].onOff){
						
						this.ctx.arc(this.arr1[i].px, this.arr1[i].py, 1, 0, 2 * Math.PI, false);
						this.ctx.fillStyle = 'rgba(132,131,133,1)';
					}else{
						this.ctx.arc(this.arr1[i].px, this.arr1[i].py, 1, 0, 2 * Math.PI, false);
						this.ctx.fillStyle = 'rgba(132,131,133,.1)';
					}
					
					
				}
				this.ctx.fill();
			}
			var _this = this;
			if(a == 1 && b == 1){
				setTimeout(function(){
					$a.proxy(_this.drawArc(),_this);
				})
			}
	    },
	    mouseMove:function(ev){
	    	this.X = ev.clientX - this.x;
	    	this.Y = ev.clientY - this.y;
	    	this.x = ev.clientX;
	    	this.y = ev.clientY;
	    	this.drawArc(this.X,this.Y);
	    }
	}
	
	new canvasN("#canvas2");
	new canvasN("#canvas3");
	new canvasN("#canvas4");
	function fn(ele){
		this.element = $a(ele);							//获取元素
		this.width = $a(window).width();						//获取元素的width
		this.height = $a(window).height();						//获取元素的height
		this.targetQuyu = {x: this.width/2, y: this.height/2};	//设置渲染区域
		this.points = [];										//设置一个空数组，用于储存效果区域的每个点的位
		this.ctx;
		this.init();											//初始化
		this.animate1();
	}
	fn.prototype = {											//fn函数的原型
		constructor:fn,											//把函数的原型指向fn函数
		init:function(){
			this.element[0].width = this.width;
			this.element[0].height = this.height;
			this.ctx = this.element[0].getContext('2d');		//getContext是一个方法，调用以后可以用上面的方法，进行画布
	        //for循环画布区域的宽，每个点的位置相差=x+width/20
	        for(var x = 0; x < this.width; x = x + this.width/20) {
	        	//高也一样
	        	// console.log(x);
	            for(var y = 0; y < this.height; y = y + this.height/20) {
	                var px = x + Math.random()*this.width/20;
	                var py = y + Math.random()*this.height/20;
	               
	                var p = {x: px, originX: px, y: py, originY: py };
	                //把每个点的坐标都push进points里面
	                this.points.push(p);
	            }
	        }
			
			//找到每个点相邻的最近的5个点
			for(var i = 0; i<this.points.length; i++){
				var arr1 = [];
				var p1 = this.points[i];

				for(var j = 0; j<this.points.length; j++){
					var p2 = this.points[j];
					if(!(p1 == p2)){
						var onOff = false;
						for(var k = 0; k<5; k++){		//这个for循环就是为arr1数组添加项
							if(!onOff){
								if(arr1[k] == undefined){	//判断当arr1[k]为空时，进行数组赋值，不为空时，走下个for里面的代码
									arr1[k] = p2;
									onOff = true;		//开关为false，为了不进行比较了
								}
							}
						}
						for(var l = 0; l<5; l++){		//当arr1[k]不为空时，把每个点与它进行比较，小于的时候赋值，并且，重新开始，不小于的时候再循环下一个
							if(!onOff){
								if(this.pow(p1,p2) < this.pow(p1,arr1[l])){
									arr1[l] = p2;
									onOff = true;
								}
							}
						}
					}
				}
				this.points[i].newArr = arr1;
				//console.log(this.arr[i].newArr);
		    };
		 	window.addEventListener('mousemove', $a.proxy(this.mouseMove,this));
		},
		drawArc:function(){
			for(var i = 0; i<this.points.length; i++){

				this.ctx.beginPath();//丢弃任何当前定义的路径并且开始一条新的路径。它把当前的点设置为 (0,0)。
				this.ctx.arc(this.points[i].x, this.points[i].y, 4, 0, 2 * Math.PI, false);

				this.ctx.fillStyle = 'rgba(156,217,249,'+this.points[i].active+')';
				//this.ctx.fillStyle = 'rgba(156,217,249,.9)'
				this.ctx.fill();
			}
	    },
		drawLines:function (index) {
	        for(var i = 0; i < 5; i++) {
	            this.ctx.beginPath();
	            this.ctx.moveTo(index.x, index.y);
	            this.ctx.lineTo(index.newArr[i].x, index.newArr[i].y);
	            this.ctx.strokeStyle = 'rgba(156,217,249,'+ index.newArr[i].active+')';
	            this.ctx.stroke();
	    	}
	    },
		animate0:function(index){
			var _this = this;
	        TweenLite.to(index, 1+1*Math.random(), {x:index.originX-50+Math.random()*100,
	            y: index.originY-50+Math.random()*100, ease:"linear",
	            onComplete: function() {
	                //_this.animate0(index);
	                $a.proxy(_this.animate0(index),_this);
	            }});
	        // $a(index).animate({x:index.originX-50+Math.random()*100,
	        //      y: index.originY-50+Math.random()*100},1000+1*Math.random(),"linear",function(){
	        //      	$a.proxy(_this.animate0(index),_this);
	        //      });
		   
		},
		animate1:function(){
			this.chonghui();
			for(var i = 0; i<this.points.length; i++){
				this.animate0(this.points[i]);
			}
		},
		chonghui:function(target,a){
			
			target = target || this.targetQuyu;
			//在给定的矩形内清除指定的像素。
			this.ctx.clearRect(0,0,this.width,this.height);
			for(var i = 0; i<this.points.length; i++){
				if(Math.abs(this.pow(target, this.points[i])) < 4000){
					this.points[i].active = 0.2;
					for(var j = 0; j<5; j++){
						this.points[i].newArr[j].active = 0.6;
					}
				}else if(Math.abs(this.pow(target, this.points[i])) < 20000) {
                    this.points[i].active = 0.1;
                    for(var j = 0; j<5; j++){
						this.points[i].newArr[j].active = 0.3;
					}
                } else if(Math.abs(this.pow(target, this.points[i])) < 40000) {
                    this.points[i].active = 0.05;
                    for(var j = 0; j<5; j++){
						this.points[i].newArr[j].active = 0.1;
					}
                } else {
                    this.points[i].active = 0;
                    for(var j = 0; j<5; j++){
						this.points[i].newArr[j].active = 0;
					}
                }
                this.drawLines(this.points[i]);
			};
			this.drawArc();
			var _this = this;
			if(a == undefined){
				setTimeout(function(){
					_this.chonghui(target);
				})
			}
		},
		mouseMove:function (ev) {
	        var posx = posy = 0;
	        if (ev.pageX || ev.pageY) {
	            posx = ev.pageX;
	            posy = ev.pageY;
	        }
	        else if (ev.clientX || ev.clientY)    {
	            posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	            posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	        }
	        this.targetQuyu.x = posx;
	        this.targetQuyu.y = posy;
	        //this.chonghui(this.targetQuyu);
	    },
		pow:function(p1,p2){
			return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
		}
	}
	new fn("#canvas1");
	// function fn1(element){
	// 	fn.call(this,element);
	// 	this.init();
	// }
	// for(var attr in fn.prototype){
	// 	fn1.prototype[attr] = fn.prototype[attr];
	// }
	// fn1.prototype.init=function(){
	// 	this.element[0].width = this.width;
	// 	this.element[0].height = this.height;
	// 	this.ctx = this.element[0].getContext('2d');
	// 	//this.ctx.beginPath();//丢弃任何当前定义的路径并且开始一条新的路径。它把当前的点设置为 (0,0)。
	// 	this.ctx.fillStyle="#FF0000";
	// 	this.ctx.fillRect(20,20,150,100);
	// }
	// new fn1("#canvas2");
})(jQuery)