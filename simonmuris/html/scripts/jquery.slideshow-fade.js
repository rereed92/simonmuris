/**** COPYRIGHT REBECCA REED ****/

(function ($) {
    $.fn.slideshowFade = function (options) {
        if (this.length > 1) {
            this.each(function () { $(this).slideshowFade(options) });
            return this;
        }
		
		var defaults = $.extend(true, {
            //animSpeed: 1000,
			animSpeed: 300,
			fadeOutSpeed: 1400,
			fadeInSpeed:1500,
		    speed: 8000,
			autoscroll: true,
		    pagination: true
        }, options);
		
        var $container = $(this);
        var selectedIndex = 0;
        var timer;

        var init = function () {

            if (defaults.pagination) {
                $container.append('<div class="slideshow-pagination"><ul class="slide-buttons"></ul></div>');
                $container.find('.slideshow-slides li').each(function (index) {
                    $container.find('.slide-buttons').append('<li class="slide-' + index + '">' + index + '</li>');
                });
                $container.find('.slide-buttons li:eq(0)').addClass('active');
            }
			
			if (defaults.autoscroll) {
                timer = setInterval(function () { fadeSlide() }, defaults.speed);
                $container.find('.slideshow-slide').hover(function () {
                    window.clearInterval(timer);
                }, function () {
                    if (defaults.autoscroll) { timer = setInterval(function () { fadeSlide() }, defaults.speed); }
                });
            } 

            $container.find('.slide-buttons li').click(function () {
                return changeSlide(this);
            });
			
        };
		
		var fadeSlide = function ()
		{
			$container.find('.slide-buttons li:eq(' + selectedIndex + ')').removeClass('active');
			selectedIndex++;
			if (selectedIndex > $container.find('.slideshow-slides li').length - 1) selectedIndex = 0;
			$container.find('.slide-buttons li:eq(' + selectedIndex + ')').addClass('active');
			//$('.slideshow li:first-child').animate({ 'opacity': 0 }, defaults.fadeOutSpeed).next('.slideshow li').animate({ 'opacity': 1 }, defaults.fadeInSpeed).end().appendTo('.slideshow');
			$('.slideshow-slides li:first-child').fadeOut(defaults.fadeOutSpeed).next('.slideshow-slides li').fadeIn(defaults.fadeInSpeed).end().appendTo('.slideshow-slides');
			//$('.slideshow li:first-child').removeClass('active').next('.slideshow li').addClass('active').end().appendTo('.slideshow');
		}

        var changeSlide = function (ele) {
			
			clearInterval(timer);
			var previousIndex = selectedIndex;
			selectedIndex = $(ele).text();

			$container.find('.slide-buttons li').removeClass('active');
            $container.find('.slide-buttons li:eq(' + selectedIndex + ')').addClass('active');
			
			$container.find('.slideshow-slides').each(function () {
					$(this).find('li').slice(0, (selectedIndex - previousIndex)).insertAfter($(this).find('li').last());
					//$(this).find('li:gt(0)').animate({ 'opacity': 0 }, defaults.fadeOutSpeed);
					//$(this).find('li').first().animate({ 'opacity': 1 }, defaults.fadeInSpeed);
					$(this).find('li').fadeOut(defaults.fadeOutSpeed);
					$(this).find('li').first().fadeIn(defaults.fadeInSpeed);
				});
				
				
			 if (selectedIndex > $container.find('.slideshow-slides li').length - 1) selectedIndex = 0;
			 
			 if (defaults.autoscroll) { timer = setInterval(function () { fadeSlide() }, defaults.speed); }
			
        }; 

        this.setup = function () {
			//$('.slideshow li:eq(0)').css('visibility', 'visible');
			$('.slideshow-slides li:gt(0)').hide();
			//$('.slideshow li:gt(0)').hide();
			//$('.slideshow li:eq(0)').css('opacity', 1);
			//$('.slideshow li:gt(0)').css('opacity', 0);
            init();
			
            //swipeDetect();
            return this;
        };

        return this.setup();
    }
})(jQuery);




















