$(document).ready(function() {
	

	$(".opening").mouseover(function() {
		$(this).fadeOut(800, function() {
			$(".requestButton").fadeIn(1000)
		});
	});


	$(".requestButton").mouseleave(function() {
		$(this).fadeOut(200, function() {
			$(".opening").fadeIn(500)
		});
	});



// 	function alertSomething() {

// 	var a = $("input.styleform2.value")

// 	if (a = []) {
// 		$(".styleForm3").click(function() {
// 		alert("Enter email address")
// 		console.log()
// 		});
// 	} else {
// 			$(".styleForm3").click(function() {
// 			alert("Request has been received")
// 		});
// 	}
  
// 	}


// alertSomething();

$(".styleForm3").click(function() {
	alert("Your request has been sent!");
})





})

