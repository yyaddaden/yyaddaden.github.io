$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:["link-about", "link-work", "link-publications", "link-education"],
		navigation: true, 
		controlArrows: false, 
		slidesNavigation: true, 
		slidesNavPosition: 'bottom', 
		scrollOverflow: true,
		onLeave: function(idx_orig, idx_dest){
			var anchors = ["link-about", "link-work", "link-publications", "link-education"];
			$('#it_' + anchors[idx_orig - 1]).attr('class', "item");
			$('#it_' + anchors[idx_dest - 1]).attr('class', "item active");
		}
	})

	$( ".btn-menu" ).click(function() {
		$('.ui.sidebar').sidebar('toggle');
	});

	$('.ui.sidebar').sidebar('setting', 'transition', 'overlay');

	$('.special.cards .image').dimmer({
	 	on: 'hover'
	});

});

