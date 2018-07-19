// placeholder
$(document).ready(function(){
	//$("input, textarea").on("focus", function(){
	$("body").on("focus","input, textarea",function(){
		if($(this).attr("data") != ''){
			if($(this).val() == $(this).attr("data"))
				$(this).val("");
		}
	});
	//$("input, textarea").on("blur", function(){
	$("body").on("blur","input, textarea",function(){
		if($(this).attr("data") != ''){
			if($(this).val() == "")
				$(this).val($(this).attr("data"));
		}
	});
});

// fixed_nav
$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        var height1 = $(document).height()-$(window).height()-100;   
        var result =  $(document).scrollTop();
        if (top < 50)
        {
        	$(".hl_top").removeClass("hl_top_act");
        }
        else
        {
        	$(".hl_top").addClass("hl_top_act");
        }
    });
});

// mask
$(document).ready(function(){
	$("body").on("click",".in_phone",function(){$(this).inputmask("9(999)9999999");});
});

// h100
$(function(){
	resizeHeader();
});
	function resizeHeader(){
	var w=window,
	d=document,
	e=d.documentElement,
	g=d.getElementsByTagName('body')[0],
	x=w.innerWidth||e.clientWidth||g.clientWidth,
	y=w.innerHeight||e.clientHeight||g.clientHeight;
	wihdowH = y;
	$(".container_main").css({'min-height':(wihdowH-0) + 'px'});
}
$(window).resize(function(){
	resizeHeader();
});


// popup_open
$(document).ready(function(){

	$(".ht_btn_call, #pu_call .closeform, .fb_call").click(function(){
		$(".popup_rgba").fadeToggle(400);
		$("#pu_call").fadeToggle(700);
		$("body").toggleClass("overflow");
		return false;
	});

	$(".hl_login, #pu_login .closeform, .hl_mob_login").click(function(){
		$(".pu_rgba").fadeToggle(400);
		$("#pu_login").fadeToggle(700);
		$("body").toggleClass("overflow");
		return false;
	});

		$("#pu_login .btn_form").click(function(){
			$("#pu_login").fadeToggle(0);
			$("#pu_good").fadeToggle(400);
			return false;
		});

		$("#pu_good .closeform").click(function(){
			$(".pu_rgba").fadeToggle(400);
			$("#pu_good").fadeToggle(400);
			$("body").toggleClass("overflow");
			return false;
		});


	$(".hl_nav_dop").click(function(){
		$(".hl_nav_dop_plashka").fadeToggle(200);
		return false;
	});

	// search mobile
	$(".hl_right_close_mobile, .hl_mob_search").click(function(){
		$(".hl_right").fadeToggle(0);
		$(".hl_login_user").fadeToggle(0);
		return false;
	});

	// pu view
	$("#add_recens, #pu_recens .closeform").click(function(){
		$(".pu_rgba").fadeToggle(500);
		$("body").toggleClass("overflow");
		return false;
	});

	// datepicker open
	$(".hl_cat_calendar_data").click(function(){
		$(".hl_cat_calendar_data_input").fadeToggle(0);
	});

 

});

$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $(".hl_nav_dop, .hl_nav_dop_plashka"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".hl_nav_dop_plashka").fadeOut(200);
			return false;
	}
});


// datapicker open/close
$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $(".hl_cat_calendar_data"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".hl_cat_calendar_data_input").fadeIn(0);
			return false;
	}
});