$(function(){

	$(".jst_about_jsjk").bind("click",function(){
		$(this).addClass("jst_about_jsjkOn");
		$(".jst_about_jst").removeClass("jst_about_jstOn");
		$(".jst_about_jyf").removeClass("jst_about_jyfOn");
		$(".jst_about_addrBox").removeClass("jst_about_addrBoxOn");
		$(".jst_about_rightBox1").css("display","block");
		$(".jst_about_rightBox2").css("display","none");
		$(".jst_about_rightBox3").css("display","none");
		$(".jst_about_rightBox4").css("display","none");
	})
	$(".jst_about_jst").bind("click",function(){
		$(this).addClass("jst_about_jstOn");
		$(".jst_about_jsjk").removeClass("jst_about_jsjkOn");
		$(".jst_about_jyf").removeClass("jst_about_jyfOn");
		$(".jst_about_addrBox").removeClass("jst_about_addrBoxOn");
		$(".jst_about_rightBox1").css("display","none");
		$(".jst_about_rightBox2").css("display","block");
		$(".jst_about_rightBox3").css("display","none");
		$(".jst_about_rightBox4").css("display","none");
	})
	$(".jst_about_jyf").bind("click",function(){
		$(this).addClass("jst_about_jyfOn");
		$(".jst_about_jst").removeClass("jst_about_jstOn");
		$(".jst_about_jsjk").removeClass("jst_about_jsjkOn");
		$(".jst_about_addrBox").removeClass("jst_about_addrBoxOn");
		$(".jst_about_rightBox1").css("display","none");
		$(".jst_about_rightBox2").css("display","none");
		$(".jst_about_rightBox3").css("display","block");
		$(".jst_about_rightBox4").css("display","none");
	})
	$(".jst_about_addrBox").bind("click",function(){
		$(this).addClass("jst_about_addrBoxOn");
		$(".jst_about_jst").removeClass("jst_about_jstOn");
		$(".jst_about_jyf").removeClass("jst_about_jyfOn");
		$(".jst_about_jsjk").removeClass("jst_about_jsjkOn");
		$(".jst_about_rightBox1").css("display","none");
		$(".jst_about_rightBox2").css("display","none");
		$(".jst_about_rightBox3").css("display","none");
		$(".jst_about_rightBox4").css("display","block");
	})










})