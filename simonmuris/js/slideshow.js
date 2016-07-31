/**** COPYRIGHT REBECCA REED ****/

var $j = jQuery.noConflict();

(function ($j) {
    $j.fn.slideshowFade = function (options) {
        if (this.length > 1) {
            this.each(function () { $j(this).slideshowFade(options) });
            return this;
        }
		
		var defaults = $j.extend(true, {
			animSpeed: 300,
			fadeOutSpeed: 1400,
			fadeInSpeed:1500,
		    speed: 8000,
			autoscroll: true,
		    pagination: true
        }, options);
		
        var $jcontainer = $j(this);
        var selectedIndex = 0;
        var timer;

        var init = function () {

        	console.log('slideshow');

            if (defaults.pagination) {
                $jcontainer.append('<div class="slideshow__pagination"><ul class="slideshow__buttons"></ul></div>');
                $jcontainer.find('.slideshow__slide').each(function (index) {
                    $jcontainer.find('.slideshow__buttons').append('<li class="slideshow__button slide-' + index + '">' + index + '</li>');
                });
                $jcontainer.find('.slideshow__buttons li:eq(0)').addClass('slideshow__button--active');
            }
			
			if (defaults.autoscroll) {
                timer = setInterval(function () { fadeSlide() }, defaults.speed);
                $jcontainer.find('.slideshow__slide').hover(function () {
                    window.clearInterval(timer);
                }, function () {
                    if (defaults.autoscroll) { timer = setInterval(function () { fadeSlide() }, defaults.speed); }
                });
            } 

            $jcontainer.find('.slideshow__button').click(function () {
                return changeSlide(this);
            });
			
        };
		
		var fadeSlide = function ()
		{
			$jcontainer.find('.slideshow__buttons li:eq(' + selectedIndex + ')').removeClass('slideshow__button--active');
			selectedIndex++;
			if (selectedIndex > $jcontainer.find('.slideshow__slide').length - 1) selectedIndex = 0;
			$jcontainer.find('.slideshow__buttons li:eq(' + selectedIndex + ')').addClass('slideshow__button--active');
			//$j('.slideshow li:first-child').animate({ 'opacity': 0 }, defaults.fadeOutSpeed).next('.slideshow li').animate({ 'opacity': 1 }, defaults.fadeInSpeed).end().appendTo('.slideshow');
			$j('.slideshow__slides li:first-child').fadeOut(defaults.fadeOutSpeed).next('.slideshow__slides li').fadeIn(defaults.fadeInSpeed).end().appendTo('.slideshow__slides');
			//$j('.slideshow li:first-child').removeClass('active').next('.slideshow li').addClass('active').end().appendTo('.slideshow');
		}

        var changeSlide = function (ele) {
			
			clearInterval(timer);
			var previousIndex = selectedIndex;
			selectedIndex = $j(ele).text();

			$jcontainer.find('.slideshow__button').removeClass('slideshow__button--active');
            $jcontainer.find('.slideshow__buttons li:eq(' + selectedIndex + ')').addClass('slideshow__button--active');
			
			$jcontainer.find('.slideshow__slides').each(function () {
					$j(this).find('li').slice(0, (selectedIndex - previousIndex)).insertAfter($j(this).find('li').last());
					//$j(this).find('li:gt(0)').animate({ 'opacity': 0 }, defaults.fadeOutSpeed);
					//$j(this).find('li').first().animate({ 'opacity': 1 }, defaults.fadeInSpeed);
					$j(this).find('li').fadeOut(defaults.fadeOutSpeed);
					$j(this).find('li').first().fadeIn(defaults.fadeInSpeed);
				});
				
				
			 if (selectedIndex > $jcontainer.find('.slideshow__slide').length - 1) selectedIndex = 0;
			 
			 if (defaults.autoscroll) { timer = setInterval(function () { fadeSlide() }, defaults.speed); }
			
        }; 

        this.setup = function () {
			//$j('.slideshow li:eq(0)').css('visibility', 'visible');
			$j('.slideshow__slides li:gt(0)').hide();
			//$j('.slideshow li:gt(0)').hide();
			//$j('.slideshow li:eq(0)').css('opacity', 1);
			//$j('.slideshow li:gt(0)').css('opacity', 0);
            init();
			
            //swipeDetect();
            return this;
        };

        return this.setup();
    }
})(jQuery);




















