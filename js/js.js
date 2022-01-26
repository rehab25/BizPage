$('.portfolio .links a').on('click', function () {
	'use strict';
	$(this).addClass('active').siblings().removeClass('active');
	if ($(this).data('class') === 'all') {
	$('.totalBlock .parent').css('opacity', 1);
	} else {
	$('.totalBlock .parent').css('opacity', '.08');
	$($(this).data('class')).parent().css('opacity', 1);
	}
	
	
});
$('.owl-carousel').owlCarousel({
    loop : true,
	autoplay : true,
    margin : 10,
    nav : true,
    responsive : {
        0 : {
            items : 1
        },
        600 : {
            items : 3
        },
        1000 : {
            items : 5
        }
    }
});


$(".loading .sk-folding-cube").fadeOut(3000, function() {
	$(this).parent().fadeOut(3000, function(){
		$("body").css("overflow", "auto");
		$(this).remove();
	})
	
});




$(".aboutLi").click(function(){ 
    $("body").animate({
            scrollTop : $(".aboutUs").offset().top - 50
        },1000);
})


$(".servicesLi").click(function(){ 
    $("body").animate({
            scrollTop : $(".services").offset().top - 50
        },1000);
})



$(".teamLi").click(function(){ 
    $("body").animate({
            scrollTop : $(".team").offset().top - 50
        },1000);
})



$(".contactLi").click(function(){ 
    $("body").animate({
            scrollTop : $(".contactUs").offset().top -50
        },1000);
})