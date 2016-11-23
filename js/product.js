$(function(){

	//点击智慧商区模块
	$(".jst_pro_business").bind("click",function(){
		//切换内容
		$(".jst_pro_box1").addClass("jst_pro_boxOn");
		$(".jst_pro_box2").removeClass("jst_pro_boxOn");
		$(".jst_pro_box3").removeClass("jst_pro_boxOn");
		$(".jst_pro_box4").removeClass("jst_pro_boxOn");
		$(".jst_pro_box5").removeClass("jst_pro_boxOn");
		//清除别的模块被选中状态
		$(".jst_pro_community").removeClass("jst_pro_communityOn");
		$(".jst_pro_park").removeClass("jst_pro_parkOn");
		$(".jst_pro_platform").removeClass("jst_pro_platformOn");
		$(".jst_pro_pointer2").removeClass("jst_pro_pointer2_On");
		$(".jst_pro_pointer3").removeClass("jst_pro_pointer3_On");
		$(".jst_pro_pointer4").removeClass("jst_pro_pointer4_On");
		$(".jst_pro_pointer5").removeClass("jst_pro_pointer5_On");
		//选中状态
		$(".jst_pro_pointer1").addClass("jst_pro_pointer1_On");

		//显示的标题
		$(".jst_pro_bigTitle span").text("智慧商区");
		$(".jst_pro_bigTitle i").addClass("icon1");
		$(".jst_pro_bigTitle i").removeClass("icon2");
		$(".jst_pro_bigTitle i").removeClass("icon3");
		$(".jst_pro_bigTitle i").removeClass("icon4");
		$(".jst_pro_bigTitle i").removeClass("icon5");

	})
	//点击智慧社区模块
	$(".jst_pro_community").bind("click",function(){
		//切换内容
		$(".jst_pro_box2").addClass("jst_pro_boxOn");
		$(".jst_pro_box1").removeClass("jst_pro_boxOn");
		$(".jst_pro_box3").removeClass("jst_pro_boxOn");
		$(".jst_pro_box4").removeClass("jst_pro_boxOn");
		$(".jst_pro_box5").removeClass("jst_pro_boxOn");
		//清除别的模块被选中状态
		$(".jst_pro_park").removeClass("jst_pro_parkOn");
		$(".jst_pro_platform").removeClass("jst_pro_platformOn");

		$(".jst_pro_pointer1").removeClass("jst_pro_pointer1_On");
		$(".jst_pro_pointer3").removeClass("jst_pro_pointer3_On");
		$(".jst_pro_pointer4").removeClass("jst_pro_pointer4_On");
		$(".jst_pro_pointer5").removeClass("jst_pro_pointer5_On");

		//选中状态
		$(this).addClass("jst_pro_communityOn");
		$(".jst_pro_pointer2").addClass("jst_pro_pointer2_On");

		//显示的标题
		$(".jst_pro_bigTitle span").text("智慧社区");
		$(".jst_pro_bigTitle i").addClass("icon2");
		$(".jst_pro_bigTitle i").removeClass("icon1");
		$(".jst_pro_bigTitle i").removeClass("icon3");
		$(".jst_pro_bigTitle i").removeClass("icon4");
		$(".jst_pro_bigTitle i").removeClass("icon5");

		

	})

	//点击智慧园区模块
	$(".jst_pro_park").bind("click",function(){
		//切换内容
		$(".jst_pro_box3").addClass("jst_pro_boxOn");
		$(".jst_pro_box1").removeClass("jst_pro_boxOn");
		$(".jst_pro_box2").removeClass("jst_pro_boxOn");
		$(".jst_pro_box4").removeClass("jst_pro_boxOn");
		$(".jst_pro_box5").removeClass("jst_pro_boxOn");
		//清除别的模块被选中状态
		$(".jst_pro_community").removeClass("jst_pro_communityOn");
		$(".jst_pro_platform").removeClass("jst_pro_platformOn");

		$(".jst_pro_pointer1").removeClass("jst_pro_pointer1_On");
		$(".jst_pro_pointer2").removeClass("jst_pro_pointer2_On");
		$(".jst_pro_pointer4").removeClass("jst_pro_pointer4_On");
		$(".jst_pro_pointer5").removeClass("jst_pro_pointer5_On");

		//选中状态
		$(this).addClass("jst_pro_parkOn");
		$(".jst_pro_pointer3").addClass("jst_pro_pointer3_On");

		//显示的标题
		$(".jst_pro_bigTitle span").text("智慧园区");
		$(".jst_pro_bigTitle i").addClass("icon3");
		$(".jst_pro_bigTitle i").removeClass("icon1");
		$(".jst_pro_bigTitle i").removeClass("icon2");
		$(".jst_pro_bigTitle i").removeClass("icon4");
		$(".jst_pro_bigTitle i").removeClass("icon5");
	})

	//点击清分平台模块
	$(".jst_pro_platform").bind("click",function(){
		//切换内容
		$(".jst_pro_box4").addClass("jst_pro_boxOn");
		$(".jst_pro_box1").removeClass("jst_pro_boxOn");
		$(".jst_pro_box2").removeClass("jst_pro_boxOn");
		$(".jst_pro_box3").removeClass("jst_pro_boxOn");
		$(".jst_pro_box5").removeClass("jst_pro_boxOn");
		//清除别的模块被选中状态
		$(".jst_pro_community").removeClass("jst_pro_communityOn");
		$(".jst_pro_park").removeClass("jst_pro_parkOn");

		$(".jst_pro_pointer1").removeClass("jst_pro_pointer1_On");
		$(".jst_pro_pointer2").removeClass("jst_pro_pointer2_On");
		$(".jst_pro_pointer3").removeClass("jst_pro_pointer3_On");
		$(".jst_pro_pointer5").removeClass("jst_pro_pointer5_On");

		//选中状态
		$(this).addClass("jst_pro_platformOn");
		$(".jst_pro_pointer4").addClass("jst_pro_pointer4_On");

		//显示的标题
		$(".jst_pro_bigTitle span").text("清分平台");
		$(".jst_pro_bigTitle i").addClass("icon4");
		$(".jst_pro_bigTitle i").removeClass("icon1");
		$(".jst_pro_bigTitle i").removeClass("icon2");
		$(".jst_pro_bigTitle i").removeClass("icon3");
		$(".jst_pro_bigTitle i").removeClass("icon5");

	})
	//点击捷顺通模块
	$(".jst_pro_jst").bind("click",function(){
		//切换内容
		$(".jst_pro_box5").addClass("jst_pro_boxOn");
		$(".jst_pro_box1").removeClass("jst_pro_boxOn");
		$(".jst_pro_box2").removeClass("jst_pro_boxOn");
		$(".jst_pro_box3").removeClass("jst_pro_boxOn");
		$(".jst_pro_box4").removeClass("jst_pro_boxOn");

		//清除别的模块被选中状态
		$(".jst_pro_community").removeClass("jst_pro_communityOn");
		$(".jst_pro_park").removeClass("jst_pro_parkOn");
		$(".jst_pro_platform").removeClass("jst_pro_platformOn");

		$(".jst_pro_pointer1").removeClass("jst_pro_pointer1_On");
		$(".jst_pro_pointer2").removeClass("jst_pro_pointer2_On");
		$(".jst_pro_pointer3").removeClass("jst_pro_pointer3_On");
		$(".jst_pro_pointer4").removeClass("jst_pro_pointer4_On");

		//选中状态
		$(".jst_pro_pointer5").addClass("jst_pro_pointer5_On");

		//显示的标题
		$(".jst_pro_bigTitle span").text("捷顺通");
		$(".jst_pro_bigTitle i").addClass("icon5");
		$(".jst_pro_bigTitle i").removeClass("icon1");
		$(".jst_pro_bigTitle i").removeClass("icon2");
		$(".jst_pro_bigTitle i").removeClass("icon3");
		$(".jst_pro_bigTitle i").removeClass("icon4");
	})






























})