$(function(){

	//banner图片 hover动画
	var x, y,count = 0;
	$(".bar").bind("mouseover",function(e){
		x = e.pageX;
		y = e.pageY;
		$(this).stop().animate({"width": 1000+"px","height":423+"px","marginLeft":-500 + "px","left":"50%"}, 500)
	})

	$(".bar").bind("mouseout",function(e){
		$(this).stop().animate({"width": 990+"px","height":413+"px","marginLeft":-495+ "px","left":"50%"}, 500)
	})

	


})