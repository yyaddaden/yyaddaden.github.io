$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:["link-about", "link-work", "link-publications", "link-education"],
		navigation: true, controlArrows: false, slidesNavigation: true, slidesNavPosition: 'bottom', scrollOverflow: true,
	})

	$( ".btn-menu" ).click(function() {
		$('.ui.sidebar').sidebar('toggle');
	});

	$('.ui.sidebar').sidebar('setting', 'transition', 'overlay');

	$('.special.cards .image').dimmer({
	 	on: 'hover'
	});
});

