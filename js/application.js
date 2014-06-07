$(document).ready(function(){
	$('#slideshow').bjqs({
		//size of slider
		width: 960,
		height: 350,
		
		//control and marker configuration
		showcontrols: true,
		centercontrols: true,
		nexttext: '>',
		prevtext: '<',
		showmarkers: false,
		
		//interaction values
		keyboardnav: true,
		hoverpause: true,
		
		//presentational options
		usecaptions: false,
		randomstart: false,
		responsive: true
	});
});