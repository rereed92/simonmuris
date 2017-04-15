/**** COPYRIGHT REBECCA REED ****/

var $j = jQuery.noConflict();

(function ($j) {
    $j.fn.lightbox = function (options) {
        if (this.length > 1) {
            this.each(function () { $j(this).lightbox(options) });
            return this;
        }
		
		var defaults = $j.extend(true, {
			animSpeed: 300,
		    pagination: true,
            arrows: true
        }, options);
		
        var $jcontainer = $j(this);
        var index = 0;
        var timer;
        var touchstartX = 0;
        var touchstartY = 0;
        var touchendX = 0;
        var touchendY = 0;

        var init = function () {	
			$j('.gallery__link').click(function (e) {
            	return displayLightbox(e, $j(this));
        	});

            $j('.lightbox__close').click(function (e) {
                return hideLightbox(e);
            });

            $j('.lightbox__control--previous').click(function (e) {
                return previousImage(e, $j(this));
            });

            $j('.lightbox__control--next').click(function (e) {
                return nextImage(e, $j(this));
            });

            $j(document).keyup(function(e) {
                if (e.keyCode === 39) return nextImage(e, $j(this));
                if (e.keyCode === 37) return previousImage(e, $j(this));
                if (e.keyCode === 27) return hideLightbox(e);
            }); 

            document.querySelector('body').addEventListener('touchstart', function(e) {
                if (e.target.className === 'lightbox__image') {
                    touchstartX = e.changedTouches[0].screenX;
                    touchstartY = e.changedTouches[0].screenY;
                }
            });

            document.querySelector('body').addEventListener('touchend', function(e) {
                if (e.target.className === 'lightbox__image') {
                    touchendX = e.changedTouches[0].screenX;
                    touchendY = e.changedTouches[0].screenY;
                    handleSwipe(e);
                }
            });
        };

        var handleSwipe = function(e) {
            if (touchendX < touchstartX) {
                return nextImage(e, $j(this)); 
            }
            
            if (touchendX > touchstartX) {
                return previousImage(e, $j(this));
            }
        };

        var displayLightbox = function(e, link) {
            e.preventDefault();

            $j('.lightbox').addClass('lightbox--display');
            $j('body').addClass('body--fixed');

            $j('.lightbox__canvas').prepend('<img src="' + link.attr('href') + '" class="lightbox__image">');

            index = link.parent().index();
            enableControls();
        };

        var hideLightbox = function(e) {
            e.preventDefault();

            $j('.lightbox').removeClass('lightbox--display');
            $j('body').removeClass('body--fixed');

            emptyLightbox();
        };
		
		var previousImage = function (e, control)
		{
            e.preventDefault();

            if (index <= 0) index = index;
            else index--;

            enableControls();

            var src = $j('.gallery__item').eq(index).find('.gallery__link').attr('href');
            $j('.lightbox__image').attr('src', src);
		}

        var nextImage = function (e, control)
        {
            e.preventDefault();

            if (index >= ($j('.gallery__item').length - 1)) index = index;
            else index++;

            enableControls();

            var src = $j('.gallery__item').eq(index).find('.gallery__link').attr('href');
            $j('.lightbox__image').attr('src', src);
        }

        var emptyLightbox = function () {
            $j('.lightbox__image').remove();
        }; 

        var enableControls = function () {
            if (index === 0) {
                $j('.lightbox__control--previous').addClass('lightbox__control--disabled');
                $j('.lightbox__control--next').removeClass('lightbox__control--disabled');
            }

            else if (index === ($j('.gallery__item').length - 1)) {
                $j('.lightbox__control--next').addClass('lightbox__control--disabled');
                $j('.lightbox__control--previous').removeClass('lightbox__control--disabled');
            }

            else {
                $j('.lightbox__control--next').removeClass('lightbox__control--disabled');
                $j('.lightbox__control--previous').removeClass('lightbox__control--disabled');
            }
        };

        this.setup = function () {
            init();
            return this;
        };

        return this.setup();
    }
})(jQuery);