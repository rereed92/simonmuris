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
        };

        var displayLightbox = function(e, link) {
            e.preventDefault();

            $j('.lightbox').addClass('lightbox--display');

            $j('.lightbox__canvas').prepend('<img src="' + link.attr('href') + '" class="lightbox__image">');

            index = link.parent().index();
            enableControls();
        };

        var hideLightbox = function(e) {
            e.preventDefault();

            $j('.lightbox').removeClass('lightbox--display');
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