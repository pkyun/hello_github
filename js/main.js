$(document).ready(function(){

	$(".main").onepage_scroll({
	   sectionContainer: ".section",
	   easing: "ease",
	   animationTime: 600,
	   pagination: true,
	   updateURL: false, 
	   loop: false,
	   keyboard: true,
	   responsiveFallback: false,
	   direction: "vertical"
	});
	

	$(".onepage-pagination li:nth-child(1) a").text('MAIN');
	$(".onepage-pagination li:nth-child(2) a").text('ABOUT');
	$(".onepage-pagination li:nth-child(3) a").text('PORTFOLIO');
	$(".onepage-pagination li:nth-child(4) a").text('CONTACT');

	// var $about = $(".onepage-pagination li:nth-child(2) a");
	// var $about = $("#about");

	// if ($about.hasClass('active')) {
	// 	console.log('ok');
	// 	$(".psBar").css('width','60%');
	// 	$(".aiBar").css('width','60%');
	// 	$(".htmlBar").css('width','90%');
	// 	$(".cssBar").css('width','85%');
	// 	$(".jsBar").css('width','70%');
	// 	$(".jqBar").css('width','80%');
	// } else {
	// 	console.log('not ok');
	// 	$(".barMove").css('width','0');
	// };
});
	