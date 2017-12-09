jQuery(document).ready(function ($) {

	$(window).resize(function(){
		if ($(window).width() >= 991){
			$('.hov').mouseover(function(){
				$('.icon-about figure img').css("opacity", "0");
				$('.detail-about h3').css("opacity", "0");
			});

			$('div.hov').mouseout(function(){
				$('.icon-about figure img').css("opacity", "1");
				$('.detail-about h3').css("opacity", "1");
			});

		}
	});

});
