
/*		前端知识汇总&案例展示
	*   {
	*       caseName: @value String            		*         案例总标题
	*       caseList: @value Array         			*         案例说明信息
	*       	caseTitle: @value String            *         案例标题  
	*      		publishTime: @value String 			*         案例上传时间  格式为：2016.10.09 08:00
	*       	caseThumbnail: @value String        *         缩略图地址
	*       	caseDescription: @value String      *         案例描述 
				caseWebsite: @value String       	*         案例网址
	*       
	*   }
*/




var casees = [
		{
			caseName:"JS的属性操作",
			caseList:[
				{
					caseTitle:"旋转的V",
					publishTime:"2016-10-20 11:25:15",
					caseThumbnail:"images/case/1/v.png",
					caseDescription:"for循环，取模%判断方向，拼接字符串 ",
					caseWebsite:"https://taozi1022.github.io/V/index.html"
				},
				{
					caseTitle:"QQ列表",
					publishTime:"2016-10-20 15:34:29",
					caseThumbnail:"images/case/1/QQlist.png",
					caseDescription:"描述：点击onclick，开关的使用，for循环，“大清洗”的思路",
					caseWebsite:"./case/JS入门/QQ列表/index.html"
				},
				{
					caseTitle:"轮播图",
					publishTime:"2016-10-20 21:32:24",
					caseThumbnail:"images/case/1/轮播图.png",
					caseDescription:"描述：运用for循环，if语句过界处理，数组的运用个，自定义属性，索引值的使用",
					caseWebsite:"./case/JS入门/轮播图/index.html"
				},
				{
					caseTitle:"单选",
					publishTime:"2016-10-21 12:04:29",
					caseThumbnail:"images/case/1/单选.png",
					caseDescription:"描述：运用for循环，取模%判断方向，拼接字符串",
					caseWebsite:"https://taozi1022.github.io/%E5%8D%95%E9%80%89/index.html"
				},
				{
					caseTitle:"百度音乐",
					publishTime:"2016-10-23 21:53:55",
					caseThumbnail:"images/case/1/music.png",
					caseDescription:"描述：隔行变色取模(%)，自定义勾选框，for循环配合if语句判断是否全选",
					caseWebsite:"https://taozi1022.github.io/%E7%99%BE%E5%BA%A6%E9%9F%B3%E4%B9%90/index.html"
				},
				{
					caseTitle:"模拟QQ聊天",
					publishTime:"2016-10-24 14:12:08",
					caseThumbnail:"images/case/1/QQ.png",
					caseDescription:"描述：这是我完成的一个模拟QQ聊天小demo，综合涉及到的知识点是判断、字符串拼接，以及布局方面的小技巧，比如提交留言后，A用户在左，B用户在右",
					caseWebsite:"https://taozi1022.github.io/QQ%E8%81%8A%E5%A4%A9/index.html"
				},
				{
					caseTitle:"轮播图-缩略",
					publishTime:"2016-10-24 17:31:07",
					caseThumbnail:"images/case/1/轮播图-缩略.png",
					caseDescription:"描述：运用for循环，if语句过界处理，数组的运用，自定义属性，索引值的使用",
					caseWebsite:"https://taozi1022.github.io/%E7%BC%A9%E7%95%A5%E5%9B%BE/index.html"
				},
				
				/*{
					caseTitle:"百度文库评分",
					publishTime:"2016-06-14 19:08",
					caseThumbnail:"images/case/1/6-百度文库评分.gif",
					caseDescription:"描述：for循环使用，if语句使用，数组，onmouseover，onmouseout",
					caseWebsite:"./case/JS入门/百度文库评分/index.html"
				},*/
				
			]
		},
		{
			caseName:"ES 5.1、数据类型、作用域",
			caseList:[
				{
					caseTitle:"修改文本框的值",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/2/修改文本框的值.png",
					caseDescription:"for循环，函数传参，input的value属性值得获取和设置",
					caseWebsite:"./case/ECMAScript5.1/修改文本框的值/index.html"
				},
				{
					caseTitle:"商品累计",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/2/商品累计.png",
					caseDescription:"判断最大值，函数传参，parseInt，parseFloat",
					caseWebsite:"./case/ECMAScript5.1/商品累计/index.html"
				},
				{
					caseTitle:"输入正确的QQ号码",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/2/输入正确的QQ号码.png",
					caseDescription:"parseInt，typeof，isNaN，length，&&逻辑运算符",
					caseWebsite:"./case/ECMAScript5.1/输入正确的QQ号码/index.html"
				},
				{
					caseTitle:"找到合适的值",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/2/找到合适的值.png",
					caseDescription:"parseInt，typeof，isNaN，-Infinity，NaN，&&逻辑运算符",
					caseWebsite:"./case/ECMAScript5.1/找到合适的值/index.html"
				}
			]
		},
		/*{
			caseName:"自定义属性、索引值",
			caseList:[
				{
					caseTitle:"图片轮播图1",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:" liulanqi 以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为 浏览器可以被认为浏览器可以被认为"
					,caseWebsite:"http:www.miaov.com"

				},
				{
					caseTitle:"图片轮播图2",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认 为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可 以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为 浏览器可以被认为浏览器可以被认为"
					,caseWebsite:"http:www.miaov.com",

				}
			]
		},
		{
			caseName:"JS数据类型、类型转换",
			caseList:[
				{
					caseTitle:"上下移动",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认 为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可 以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为 浏览器可以被认为浏览器可以被认为"
					,caseWebsite:"http:www.miaov.com"
				},
				{
					caseTitle:"切换来去",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认 为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可 以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为 浏览器可以被认为浏览器可以被认为"
					,caseWebsite:"http:www.miaov.com"
				}
			]
		},{
			caseName:"函数传参、重用、价格计算",
			caseList:[
				{
					caseTitle:"图片轮播图1",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:" liulanqi 以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为 浏览器可以被认为浏览器可以被认为"
					,caseWebsite:"http:www.miaov.com"

				},
				{
					caseTitle:"图片轮播图2",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认 为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可 以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为 浏览器可以被认为浏览器可以被认为"
					,caseWebsite:"http:www.miaov.com",

				}
			]
		},
		{
			caseName:"运算符流程控制",
			caseList:[
				{
					caseTitle:"上下移动",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认 为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可 以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为 浏览器可以被认为浏览器可以被认为"
					,caseWebsite:"http:www.miaov.com"
				},
				{
					caseTitle:"切换来去",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认 为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可 以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为 浏览器可以被认为浏览器可以被认为"
					,caseWebsite:"http:www.miaov.com"
				}
			]
		},{
			caseName:"定时器管理、函数封装",
			caseList:[
				{
					caseTitle:"图片轮播图1",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:" liulanqi 以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为 浏览器可以被认为浏览器可以被认为"
					,caseWebsite:"http:www.miaov.com"

				},
				{
					caseTitle:"图片轮播图2",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认 为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可 以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为 浏览器可以被认为浏览器可以被认为"
					,caseWebsite:"http:www.miaov.com",

				}
			]
		},
		{
			caseName:"日期对象、时钟倒计时",
			caseList:[
				{
					caseTitle:"上下移动",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认 为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可 以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为 浏览器可以被认为浏览器可以被认为"
					,caseWebsite:"http:www.miaov.com"
				},
				{
					caseTitle:"切换来去",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认 为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可 以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为 浏览器可以被认为浏览器可以被认为"
					,caseWebsite:"http:www.miaov.com"
				}
			]
		},{
			caseName:"字符串、查找高亮显示",
			caseList:[
				{
					caseTitle:"消除表情小游戏",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/消除表情小游戏.png",
					caseDescription:"这是一个综合小练习，是运用JS的相关方法以及一些逻辑来实现的小游戏，可玩性极高哦~"
					,caseWebsite:"http://bbs.miaov.com/online_class/JS1-lesson-gif/JS37.html"

				},
				{
					caseTitle:"排序实例",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/排序.png",
					caseDescription:"数组的方法sort实在妙不可言，通过各种小案例来达到令人满意的效果，也是学以致用的一种体验。"
					,caseWebsite:"http://bbs.miaov.com/online_class/JS1-lesson-gif/JS38.png",

				}
			]
		}*/
]