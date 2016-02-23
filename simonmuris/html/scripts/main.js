/**** COPYRIGHT REBECCA REED ****/

$(document).ready(function () 
{   

    if ($('html').hasClass('lt-ie9')) {
        $('html').browserWarning({
            headerMessage: 'Did you know that your Internet Browser is out of date?',
            paragraph1: 'Your browser is out of date, and may not be compatible with our website. A list of the most popular web browsers can be found below.',
            paragraph2: 'Just click on the icons below to get to the download page',
            closeMessage: 'By closing this window you acknowledge that your experience on this website may be degraded',
            closeIcon: '<i class="fa fa-times-circle"></i>'
        });
    }
	
	$('.slideshow').slideshowFade();
	
	var imageHeight = $('.slideshow-slide img').height();
	$('.slideshow').height(imageHeight);

	$(window).resize(function() {
		var imageHeight = $('.slideshow-slide img').height();
		$('.slideshow').height(imageHeight);
	});


	$('.process-image').hover(function() {
		$('.process-image').removeClass('active');
		$('.process-text').removeClass('show');
		$(this).parent().find('.process-text').addClass('show');
		$(this).addClass('active');
	});


	$('.menu').click(function() {
		$(this).toggleClass('menu--active');
		$('.nav').toggleClass('nav--active');
	})


	$(window).scroll(function() 
	{
		if ($(this).scrollTop() > 1) 
		{
		    $('.header').addClass('sticky');
		    $('.content').addClass('sticky');
	  	}
		else
		{
		    $('.header').removeClass('sticky');
		    $('.content').removeClass('sticky');
		}
	});



	var timelineBlocks = $('.timeline-block'),
		offset = 0.8;

	hideBlocks(timelineBlocks, offset);

	$(window).scroll(function()
	{
		if (window.requestAnimationFrame)
		{
			window.requestAnimationFrame(function() { 
				showBlocks(timelineBlocks, offset); 
			});
		}
		else 
		{
			setTimeout(function() { 
				showBlocks(timelineBlocks, offset); 
			}, 100)
		}
	});
   
});


function hideBlocks(blocks, offset) 
{
	blocks.each(function() 
	{
		if ($(this).offset().top > $(window).scrollTop()+$(window).height() * offset) {
			$(this).find('.timeline-image, .timeline-content').addClass('is-hidden');
		}
	});
}


function showBlocks(blocks, offset) 
{
	blocks.each(function() 
	{
		if ($(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.timeline-image').hasClass('is-hidden')) { 
			$(this).find('.timeline-image, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
		}
	});
}


var map;
function initMap() 
{

  	map = new google.maps.Map(document.getElementById('contact-map'), {
    	center: {lat: 51.521327, lng: -0.108083},
    	zoom: 17
  	});

  	var marker = new google.maps.Marker({
  		position: {lat: 51.521327, lng: -0.108083},
  		map: map,
  		icon: '/simonmuris-html/images/diamond.png'
	});

	var center;
	function calculateCenter() 
	{
			center = map.getCenter();
	}

	google.maps.event.addDomListener(map, 'idle', function() 
	{
			calculateCenter();
	});

	google.maps.event.addDomListener(window, 'resize', function() 
	{
			map.setCenter(center);
	});

}




   