$(document).ready(function() {
	
	// $(".requestButton").mouseover(function() {
	// 	$(".opening").fadeOut(800)
	// });

	$(".opening").mouseover(function() {
		$(this).slideUp(1000)
	});

	$(".opening").mouseover(function() {
		$(".requestButton").fadeIn(1000)
	});

	$(".requestButton").mouseleave(function() {
		$(this).fadeOut(1000)
	});

	$(".requestButton").mouseleave(function() {
		$(".opening").slideDown(1000)
	});



	$(".styleForm3").click(function() {
		alert("Confirmed!")
	})









})

