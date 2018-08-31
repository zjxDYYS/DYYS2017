$(document).ready(function(){
	$("#drawingLi").click(function(){
		clear();
		init();
	});
	$("#navXQ").click(function(){
		clear();
		init();
	});
	function clear() {
		$("#TLDiv").remove();
		$("#RSDiv").remove();
		$("#RSTab").remove();
		$("#RSProject").remove();
		$("#RSCampus").remove();
		$("#RSPractice").remove();
	}
	function init() {
		$(".menuHolder").remove();
		var ITv = $('<div class="menuHolder"><div class="menuWindow"><ul class="p1"><li class="s1"><a href="#url">绘画</a><ul class="p2"><li class="s2"><a href="#"><span>首页</span></a></li><li id = "CGLI" class="s2"><a href="#url"><span>CG绘画</span></a></li><li id = "OPaint" class="s2"><a href="#url"><span>油画</span></a></li><li id = "Gouache" class="s2"><a href="#url"><span>水粉</span></a></li><li id = "Sketch" class="s2"><a href="#url"><span>素描</span></a></li><li id = "Other" class="s2 b6"><a href="#url"><span>其他</span></a></li></ul></li></ul></div></div>'); 
		ITv.attr('class','menuHolder');
		var imgDiv = $('<div id="content"><div id="gallery"><div id="gallery_nav"></div><div id="gallery_output"></div><div class="clear"></div></div></div>'); 
		imgDiv.appendTo(ITv); 
		ITv.appendTo('#container'); 
		CGDiv();
		$("#CGLI").click(function(){
			CGDiv();
		});
		$("#OPaint").click(function(){
			OPaintDiv();
		});
		$("#Gouache").click(function(){
			GouacheDiv();
		});
		$("#Sketch").click(function(){
			SketchDiv();
		});
		$("#Other").click(function(){
			OtherDiv();
		});
		$(".s1 a").hover(
			function(){
				$(".s1 > a").attr("style","background: #cf4301");
			},
			function(){
				$(".s1 > a").attr("style","background: #0084e9");
			}
		);
	}
	function CGDiv() {
		$("#gallery_nav").empty();
		var imgDiv = $('<a class="on" rel="img1" href="javascript:;"><img src="zjx/img/drawing/cg1.png" /></a><a rel="img2" href="javascript:;"><img src="zjx/img/drawing/cg2.jpg" /></a><a rel="img3" href="javascript:;"><img src="zjx/img/drawing/cg3.jpg" /></a><a rel="img4" href="javascript:;"><img src="zjx/img/drawing/cg4.jpg" /></a><a rel="img5" href="javascript:;"><img src="zjx/img/drawing/cg5.jpg" /></a><a rel="img6" href="javascript:;"><img src="zjx/img/drawing/cg6.jpg" /></a><a rel="img7" href="javascript:;"><img src="zjx/img/drawing/cg7.jpg" /></a><a rel="img8" href="javascript:;"><img src="zjx/img/drawing/cg8.jpg" /></a><a rel="img9" href="javascript:;"><img src="zjx/img/drawing/cg9.jpg" /></a><a rel="img10" href="javascript:;"><img src="zjx/img/drawing/cg10.png" /></a><a rel="img11" href="javascript:;"><img src="zjx/img/drawing/cg11.jpg" /></a><a rel="img12" href="javascript:;"><img src="zjx/img/drawing/cg12.jpg" /></a><a rel="img13" href="javascript:;"><img src="zjx/img/drawing/cg13.jpg" /></a>'); 
		imgDiv.appendTo("#gallery_nav"); 
		
		$("#gallery_output").empty();
		var imgDiv = $('<img id="img1" src="zjx/img/drawing/cg1.png" /><img id="img2" src="zjx/img/drawing/cg2.jpg"/><img id="img3" src="zjx/img/drawing/cg3.jpg" /><img id="img4" src="zjx/img/drawing/cg4.jpg" /><img id="img5" src="zjx/img/drawing/cg5.jpg" /><img id="img6" src="zjx/img/drawing/cg6.jpg" /><img id="img7" src="zjx/img/drawing/cg7.jpg" /><img id="img8" src="zjx/img/drawing/cg8.jpg" /><img id="img9" src="zjx/img/drawing/cg9.jpg" /><img id="img10" src="zjx/img/drawing/cg10.png" /><img id="img11" src="zjx/img/drawing/cg11.jpg" /><img id="img12" src="zjx/img/drawing/cg12.jpg" /><img id="img13" src="zjx/img/drawing/cg13.jpg" />'); 
		imgDiv.appendTo("#gallery_output"); 
		initImgClick();
	}
	function OPaintDiv() {
		$("#gallery_nav").empty();
		var imgDiv = $('<a class="on" rel="img1" href="javascript:;"><img src="zjx/img/drawing/op1.jpg" /></a><a rel="img2" href="javascript:;"><img src="zjx/img/drawing/op2.jpg" /></a><a rel="img3" href="javascript:;"><img src="zjx/img/drawing/op3.jpg" /></a><a rel="img4" href="javascript:;"><img src="zjx/img/drawing/op4.jpg" /></a><a rel="img5" href="javascript:;"><img src="zjx/img/drawing/op5.jpg" /></a>'); 
		imgDiv.appendTo("#gallery_nav"); 
		
		$("#gallery_output").empty();
		var imgDiv = $('<img id="img1" src="zjx/img/drawing/op1.jpg" /><img id="img2" src="zjx/img/drawing/op2.jpg"/><img id="img3" src="zjx/img/drawing/op3.jpg" /><img id="img4" src="zjx/img/drawing/op4.jpg" /><img id="img5" src="zjx/img/drawing/op5.jpg" />'); 
		imgDiv.appendTo("#gallery_output"); 
		initImgClick();
		
	}
	function GouacheDiv() {
		$("#gallery_nav").empty();
		var imgDiv = $('<a class="on" rel="img1" href="javascript:;"><img src="zjx/img/drawing/gc1.jpg" /></a><a rel="img2" href="javascript:;"><img src="zjx/img/drawing/gc2.jpg" /></a><a rel="img3" href="javascript:;"><img src="zjx/img/drawing/gc3.jpg" /></a><a rel="img4" href="javascript:;"><img src="zjx/img/drawing/gc4.jpg" /></a><a rel="img5" href="javascript:;"><img src="zjx/img/drawing/gc5.jpg" /></a>'); 
		imgDiv.appendTo("#gallery_nav"); 
		
		$("#gallery_output").empty();
		var imgDiv = $('<img id="img1" src="zjx/img/drawing/gc1.jpg" /><img id="img2" src="zjx/img/drawing/gc2.jpg"/><img id="img3" src="zjx/img/drawing/gc3.jpg" /><img id="img4" src="zjx/img/drawing/gc4.jpg" /><img id="img5" src="zjx/img/drawing/gc5.jpg" />'); 
		imgDiv.appendTo("#gallery_output"); 
		initImgClick();
		
	}
	function SketchDiv() {
		$("#gallery_nav").empty();
		var imgDiv = $('<a class="on" rel="img1" href="javascript:;"><img src="zjx/img/drawing/sc1.jpg" /></a><a rel="img2" href="javascript:;"><img src="zjx/img/drawing/sc2.jpg" /></a><a rel="img3" href="javascript:;"><img src="zjx/img/drawing/sc3.jpg" /></a><a rel="img4" href="javascript:;"><img src="zjx/img/drawing/sc4.jpg" /></a><a rel="img5" href="javascript:;"><img src="zjx/img/drawing/sc5.jpg" /></a>'); 
		imgDiv.appendTo("#gallery_nav"); 
		
		$("#gallery_output").empty();
		var imgDiv = $('<img id="img1" src="zjx/img/drawing/sc1.jpg" /><img id="img2" src="zjx/img/drawing/sc2.jpg"/><img id="img3" src="zjx/img/drawing/sc3.jpg" /><img id="img4" src="zjx/img/drawing/sc4.jpg" /><img id="img5" src="zjx/img/drawing/sc5.jpg" />'); 
		imgDiv.appendTo("#gallery_output"); 
		initImgClick();
		
	}
	function OtherDiv() {
		$("#gallery_nav").empty();
		var imgDiv = $(''); 
		imgDiv.appendTo("#gallery_nav"); 
		
		$("#gallery_output").empty();
		var imgDiv = $('<p style="text-align:center;line-height: 400px;"><a href="https://ycg.qq.com/homepage/156297">更多作品请点击 腾讯原创馆</a></p><p style="text-align:center;line-height: 200px;">或关注QQ：1728234468 空间相册</p>'); 
		imgDiv.appendTo("#gallery_output"); 
		initImgClick();
		
	}
	function initImgClick() {
		$("#gallery_output img").not(":first").hide();
		$("#gallery a").click(function() {
			$("#gallery a").removeClass('on');
			$(this).addClass("on");
			if ( $("#" + this.rel).is(":hidden") ) {
				$("#gallery_output img").slideUp();
				$("#" + this.rel).slideDown();
			}
		});
	}
});