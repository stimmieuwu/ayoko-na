//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "31 May 2024 12:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
