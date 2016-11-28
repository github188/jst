$(function(){

	//tab切换
	$(".jst_pro_aTab").bind("click",function(){//智慧商区

		$(".jst_pro_bTab").removeClass("jst_pro_bTabOn")
		$(".jst_pro_cTab").removeClass("jst_pro_cTabOn")
		$(".jst_pro_dTab").removeClass("jst_pro_dTabOn")

		$(".jst_pro_pointer1").addClass("jst_pro_pointer1On");
		$(".jst_pro_pointer2").removeClass("jst_pro_pointer2On");
		$(".jst_pro_pointer3").removeClass("jst_pro_pointer3On");
		$(".jst_pro_pointer4").removeClass("jst_pro_pointer4On");
		$(".jst_pro_pointer5").removeClass("jst_pro_pointer5On");


	})

	$(".jst_pro_bTab").bind("click",function(){//智慧社区

		$(".jst_pro_bTab").addClass("jst_pro_bTabOn")
		$(".jst_pro_cTab").removeClass("jst_pro_cTabOn")
		$(".jst_pro_dTab").removeClass("jst_pro_dTabOn")

		$(".jst_pro_pointer1").removeClass("jst_pro_pointer1On");
		$(".jst_pro_pointer2").addClass("jst_pro_pointer2On");
		$(".jst_pro_pointer3").removeClass("jst_pro_pointer3On");
		$(".jst_pro_pointer4").removeClass("jst_pro_pointer4On");
		$(".jst_pro_pointer5").removeClass("jst_pro_pointer5On");

	})

	$(".jst_pro_cTab").bind("click",function(){//智慧元区

		$(".jst_pro_bTab").removeClass("jst_pro_bTabOn")
		$(".jst_pro_cTab").addClass("jst_pro_cTabOn")
		$(".jst_pro_dTab").removeClass("jst_pro_dTabOn")

		$(".jst_pro_pointer1").removeClass("jst_pro_pointer1On");
		$(".jst_pro_pointer2").removeClass("jst_pro_pointer2On");
		$(".jst_pro_pointer3").addClass("jst_pro_pointer3On");
		$(".jst_pro_pointer4").removeClass("jst_pro_pointer4On");
		$(".jst_pro_pointer5").removeClass("jst_pro_pointer5On");

	})

	$(".jst_pro_dTab").bind("click",function(){//清分平台

		$(".jst_pro_bTab").removeClass("jst_pro_bTabOn")
		$(".jst_pro_cTab").removeClass("jst_pro_cTabOn")
		$(".jst_pro_dTab").addClass("jst_pro_dTabOn")

		$(".jst_pro_pointer1").removeClass("jst_pro_pointer1On");
		$(".jst_pro_pointer2").removeClass("jst_pro_pointer2On");
		$(".jst_pro_pointer3").removeClass("jst_pro_pointer3On");
		$(".jst_pro_pointer4").addClass("jst_pro_pointer4On");
		$(".jst_pro_pointer5").removeClass("jst_pro_pointer5On");


	})

	$(".jst_pro_eTab").bind("click",function(){//捷顺通

		$(".jst_pro_bTab").removeClass("jst_pro_bTabOn");
		$(".jst_pro_cTab").removeClass("jst_pro_cTabOn");
		$(".jst_pro_dTab").removeClass("jst_pro_dTabOn");

		$(".jst_pro_pointer1").removeClass("jst_pro_pointer1On");
		$(".jst_pro_pointer2").removeClass("jst_pro_pointer2On");
		$(".jst_pro_pointer3").removeClass("jst_pro_pointer3On");
		$(".jst_pro_pointer4").removeClass("jst_pro_pointer4On");
		$(".jst_pro_pointer5").addClass("jst_pro_pointer5On");

	})




















})