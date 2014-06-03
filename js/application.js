$(function () {

	$('#navbar2').hide();

	$('#nextpage').click(function() {
		$('#navbar2').show();
		$('#navbar1').hide();
	});
	
	$('#previouspage').click(function() {
		$('#navbar1').show();
		$('#navbar2').hide();
	});
	
	
	$('#slider').unslider({
		speed: 300,
		delay: 4000,
		keys: true,
		dots: true,
		fluid: false
	});
});
