



$(document).ready(function() {

	
	$(".text").mouseover(function() {
		$(this).animate({opacity: "0.5"})
	})

	$(".text").mouseleave(function() {
		$(this).animate({opacity: "1.0"})
	})


	$(".applyButton, .applyButton2").mouseover(function() {
		$(this).animate({opacity: "0.5"});
	})

	$(".applyButton, .applyButton2").mouseleave(function() {
		$(this).animate({opacity: "1.0"}, 300)
	})


 })