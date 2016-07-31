/**** COPYRIGHT REBECCA REED ****/

var $j = jQuery.noConflict();

$j(function()
{

// $(document).ready(function () 
// {   

	console.log("hello");

 //    if ($('html').hasClass('lt-ie9')) {
 //        $('html').browserWarning({
 //            headerMessage: 'Did you know that your Internet Browser is out of date?',
 //            paragraph1: 'Your browser is out of date, and may not be compatible with our website. A list of the most popular web browsers can be found below.',
 //            paragraph2: 'Just click on the icons below to get to the download page',
 //            closeMessage: 'By closing this window you acknowledge that your experience on this website may be degraded',
 //            closeIcon: '<i class="fa fa-times-circle"></i>'
 //        });
 //    }
	
	$j('.slideshow').slideshowFade();	
	var imageHeight = $j('.slideshow__image').height();
	$j('.slideshow').height(imageHeight);

	$j(window).resize(function() {
		var imageHeight = $j('.slideshow__image').height();
		$j('.slideshow').height(imageHeight);
	});


	$j('.process__image').hover(function() {
		$j('.process__image').removeClass('process__image--active');
		$j('.process__text').removeClass('process__text--display');
		$j(this).parent().find('.process__text').addClass('process__text--display');
		$j(this).addClass('process__image--active');
	});


	$j('.navigation__menu').click(function() {
		$j(this).toggleClass('navigation__menu--active');
		$j('.navigation__nav').toggleClass('navigation__nav--active');
		$j('.navigation__bar').toggleClass('navigation__bar--active');
	})


	$j(window).scroll(function() 
	{
		if ($j(this).scrollTop() > 20) 
		{
		    $j('.header').addClass('header--sticky');
		    $j('.content').addClass('content--sticky');
	  	}
		else
		{
		    $j('.header').removeClass('header--sticky');
		    $j('.content').removeClass('content--sticky');
		}
	});



	var timelineBlocks = $j('.timeline__block')
	var offset = 0.8;

	hideBlocks(timelineBlocks, offset);

	$j(window).scroll(function()
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
		if ($j(this).offset().top > $j(window).scrollTop()+$j(window).height() * offset) {
			$j(this).find('.timeline__marker').addClass('timeline__marker--hidden');
			$j(this).find('.timeline__content').addClass('timeline__content--hidden');
		}
	});
}


function showBlocks(blocks, offset) 
{
	blocks.each(function() 
	{
		if ($j(this).offset().top <= $j(window).scrollTop()+$j(window).height()*offset && $j(this).find('.timeline__marker').hasClass('timeline__marker--hidden')) { 
			$j(this).find('.timeline__marker').removeClass('timeline__marker--hidden').addClass('timeline__marker--bounce');
			$j(this).find('.timeline__content').removeClass('timeline__content--hidden').addClass('timeline__content--bounce');
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




   