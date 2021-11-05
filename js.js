"use strict";
$(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700,
		cssEase: 'ease',
		infinite: true,
		initialSlide: 2,
		autoplay: true,
		autoplaySpeed: 1500,
		draggable: true,
		swipe: true,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: false,
		variableWidth: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
		fade: false,
		asNavFor: '.slider2',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}],
	});
	$('.slider2').slick({
		asNavFor: '.slider',
		arrows: false,
		fade: true,
		draggable: false,
		swipe: false,
	});
});
