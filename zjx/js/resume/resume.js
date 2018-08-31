$(document).ready(function(){
	$(".sliderUl").YuxiSlider();
	init();
	$("#resumeLi").click(function(){
		clear();
		init();
	});
	$("#navJL").click(function(){
		clear();
		init();
	});
	function init() {
		var titleDiv = $('<div></div>'); 
		titleDiv.attr('id','RSDiv');
		var childdiv = $('<div id="myModal" class="modal"><img id="RSImg" class = "RSimg1" src="zjx/img/RSimg.jpg" alt="半身照 " position: absolute;top: 10px;left: 100px;><div id="brief"><p class="briefText3">姓名：赵加旋</p><p class="briefText2">性别：男</p><p class="briefText4">学历：本科</p><p class="briefText1">专业：计算机科学与技术</p><p class="briefText3">生日：1993/4/27</p><p class="briefText2">年龄：24</p><p class="briefText4">生源地：云南保山</p><p class="briefText1">电话：17666120480</p></div></div>');        //创建一个子div           
		childdiv.appendTo(titleDiv);  
		titleDiv.appendTo('#container'); 
		$("#RSImg").hover(
			function(){
				$("#RSImg").attr("class", "RSimg2");
			},
			function(){
				$("#RSImg").attr("class", "RSimg1");
			}
		);
		var tableDiv = $('<div><table><caption>技能及求职意向</caption><tbody><tr><td></td><td>1</td><td>2</td><td>3</td></tr><tr><td>技能</td><td>web3D（基于webGl的three.js）</td><td>html5+css3+javascript(jQuery) + UI(PS)</td><td>传统手绘（素描、水粉、油画）数码PS绘画（角色设计：写实、Q版）</td></tr><tr><td>求职意向</td><td>three.js工程师</td><td>前端工程师（H5开发）</td><td>角色设计师，游戏开发</td></tr></tbody></table></div>');        //创建一个父div     
		tableDiv.attr('id','RSTab');
		tableDiv.appendTo('#container');
		var projectDiv = $('<div><table><caption>工作经历</caption><tbody><tr id = "projectTitle"><td>序号</td><td>时间</td><td>项目</td><td>职位</td><td>链接</td></tr><tr><td>1</td><td class="miniText">2015/3/1-2015/4/2</td><td>绘画教师</td><td>绘画教师</td><td class="miniText"><a href="https://ycg.qq.com/homepage/156297">绘画作品发表在腾讯原创馆</a></td></tr><tr><td>2</td><td class="miniText">2016/3/1-2016/8/1</td><td>F3D家具设计1.0（三维家具设计）</td><td>three.js前端工程师+UI设计师</td><td class="miniText"><a href="http://f3d.ddroom.cn/views/multiModel/index.html">http://f3d.ddroom.cn/views/multiModel/index.html</a></td></tr><tr><td>3</td><td class="miniText">2016/8/1-2017/1/1</td><td>滴答空间2.0（三维家居设计）</td><td>three.js前端工程师</td><td class="miniText"><a href="http://dev.ddroom.cn/">http://dev.ddroom.cn/</a></td></tr><tr><td>4</td><td class="miniText">2017/1/1-2017/9/7</td><td>F3D家具设计2.0（三维家具设计）</td><td>three.js前端工程师</td><td class="miniText">开发中</td></tr></tbody></table></div>');        //创建一个父div     
		projectDiv.attr('id','RSProject');
		projectDiv.appendTo('#container');
		var campusDiv = $('<div><table><caption>校园经历</caption><tbody><tr><td>2013/5/4</td><td id="certificate1">获昆明理工大学书画协会“优秀工作者”和“优秀部委”荣誉称号</td></tr><tr><td>2014/6/6</td><td id="certificate2">获管理与经济学院书法协会培训部部长表现优异的奖状</td></tr><tr><td>2013/5</td><td id="certificate3">获翰林文化之夏第二届“书法、绘画、剪纸”大赛，绘画组一等奖</td></tr><tr><td>2013/4/13</td><td id="certificate4">获书画大赛绘画组一等奖</td></tr><tr><td>2014/12/21-2015/6/30</td><td id="certificate5">获360校园俱乐部校园精英团队成员聘书</td></tr></tbody></table></div>');        //创建一个父div     
		campusDiv.attr('id','RSCampus');
		campusDiv.appendTo('#container');
		var campusDiv = $('<div><table><caption>实习经历</caption><tbody><tr><td>2015/2/12</td><td id="practice1">云南华东电脑科技有限公司</td><td>网络员</td></tr><tr><td>2015/4/18</td><td id="practice2">云南博厚信息教育咨询有限公司</td><td>美术教师</td></tr><tr><td>2015/11/2</td><td id="practice3">云南云思科技有限公司</td><td>UI设计师</td></tr></tbody></table></div>');        //创建一个父div     
		campusDiv.attr('id','RSPractice');
		campusDiv.appendTo('#container');
		$("#certificate1").hover(
			function(){
				var imgC1 = $("<img src='zjx/img/c1.jpg'/>");
				imgC1.attr('id','imgC1');
				imgC1.appendTo('#container');
			},
			function(){
				$("#imgC1").remove();
			}
		);
		$("#certificate2").hover(
			function(){
				var imgC2 = $("<img src='zjx/img/c2.jpg'/>");
				imgC2.attr('id','imgC2');
				imgC2.appendTo('#container');
			},
			function(){
				$("#imgC2").remove();
			}
		);
		$("#certificate3").hover(
			function(){
				var imgC3 = $("<img src='zjx/img/c3.jpg'/>");
				imgC3.attr('id','imgC3');
				imgC3.appendTo('#container');
			},
			function(){
				$("#imgC3").remove();
			}
		);
		$("#certificate4").hover(
			function(){
				var imgC4 = $("<img src='zjx/img/c4.jpg'/>");
				imgC4.attr('id','imgC4');
				imgC4.appendTo('#container');
			},
			function(){
				$("#imgC4").remove();
			}
		);
		$("#certificate5").hover(
			function(){
				var imgC5 = $("<img src='zjx/img/c5.jpg'/>");
				imgC5.attr('id','imgC5');
				imgC5.appendTo('#container');
			},
			function(){
				$("#imgC5").remove();
			}
		);
		$("#practice1").hover(
			function(){
				var imgC1 = $("<img src='zjx/img/sxzm1.png'/>");
				imgC1.attr('id','imgsxzm1');
				imgC1.appendTo('#container');
			},
			function(){
				$("#imgsxzm1").remove();
			}
		);
		$("#practice2").hover(
			function(){
				var imgC2 = $("<img src='zjx/img/sxzm2.jpg'/>");
				imgC2.attr('id','imgsxzm2');
				imgC2.appendTo('#container');
			},
			function(){
				$("#imgsxzm2").remove();
			}
		);
		$("#practice3").hover(
			function(){
				var imgC3 = $("<img src='zjx/img/sxzm3.jpg'/>");
				imgC3.attr('id','imgsxzm3');
				imgC3.appendTo('#container');
			},
			function(){
				$("#imgsxzm3").remove();
			}
		);
	}
	function clear() {
		$(".menuHolder").remove();
		$("#TLDiv").remove();
		$("#RSDiv").remove();
		$("#RSTab").remove();
		$("#RSProject").remove();
		$("#RSCampus").remove();
		$("#RSPractice").remove();
	}
});