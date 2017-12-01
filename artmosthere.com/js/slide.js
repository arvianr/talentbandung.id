jQuery(document).ready(function ($) {

	var slideCount = $('#slider1 ul li').length;
	var slideWidth = $('#slider1 ul li').width();
	var slideHeight = $('#slider1 ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider1').css({ width: slideWidth, height: slideHeight });

	$('#slider1 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider1 ul li:last-child').prependTo('#slider1 ul');

    function moveLeft() {
        $('#slider1 ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('#slider1 ul li:last-child').prependTo('#slider1 ul');
            $('#slider1 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider1 ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('#slider1 ul li:first-child').appendTo('#slider1 ul');
            $('#slider1 ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});

jQuery(document).ready(function ($) {

	var slideCount = $('#slider2 ul li').length;
	var slideWidth = $('#slider2 ul li').width();
	var slideHeight = $('#slider2 ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider2').css({ width: slideWidth, height: slideHeight });

	$('#slider2 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider2 ul li:last-child').prependTo('#slider2 ul');

    function moveLeft() {
        $('#slider2 ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('#slider2 ul li:last-child').prependTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider2 ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('#slider2 ul li:first-child').appendTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    $('a.control_prev_2').click(function () {
        moveLeft();
    });

    $('a.control_next_2').click(function () {
        moveRight();
    });

		$('.hov').mouseover(function(){
			$('.icon-about figure img').css("opacity", "0");
			$('.detail-about h3').css("color", "white");
		});

		$('div.hov').mouseout(function(){
			$('.icon-about figure img').css("opacity", "1");
			$('.detail-about h3').css("color", "black");
		});

});
