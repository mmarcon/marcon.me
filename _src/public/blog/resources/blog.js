$(function(){
	var nav = $('nav'), pos = nav.offset(), header = $('hgroup');
	$(window).on('scroll', function(){
		if (nav.offset().top <= pos.top) {
			nav.addClass('fixed');
		}
		if ($(this).scrollTop() < header.height()) {
			nav.removeClass('fixed');	
		}
	});
});

// $(window).on('load', function(){
//     //Lazy load stuff
//     $('head').append('<link rel="stylesheet" href="http://marcon.me/blog/resources/prism.css" type="text/css"/>');
//     $.getScript('http://marcon.me/blog/resources/prism.js');
// });