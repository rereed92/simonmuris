/**** COPYRIGHT REBECCA REED ****/

var $j = jQuery.noConflict();

(function ($j) {
    $j.fn.process = function (options) {
        if (this.length > 1) {
            this.each(function () { $j(this).process(options) });
            return this;
        }
        
        var defaults = $j.extend(true, {
            speed: 3000,
            autoRotate: true
        }, options);
        
        var $jcontainer = $j(this);
        var selectedIndex = 0;
        var timer;
        var fired = false;
        var length = $jcontainer.find('.process__container').length;

        var init = function () 
        {    
            if ($j(window).width() > 850)
            {
                if (defaults.autoRotate) { timer = setInterval(function () { fadeProcess() }, defaults.speed); }

                $jcontainer.find('.process__image').hover(function () {
                    return changeProcess(this);
                });
            } 
            else 
            {
                selectedIndex = 0;
            }

            $j(window).resize(function()
            {
                window.clearInterval(timer);

                if (defaults.autoRotate) { timer = setInterval(function () { fadeProcess() }, defaults.speed); }
            });          
        };
        
        var fadeProcess = function()
        {
            reset();

            selectedIndex++;
            if (selectedIndex === length) selectedIndex = 0;

            activate();
        }

        var changeProcess = function(ele) 
        {
            window.clearInterval(timer);

            reset();

            selectedIndex = $j(ele).closest('.process__container').index();

            activate();

            if (defaults.autoRotate) { timer = setInterval(function () { fadeProcess() }, defaults.speed); }            
        }; 

        var reset = function()
        {
            $jcontainer.find('.process__image').removeClass('process__image--active');
            $jcontainer.find('.process__text').removeClass('process__text--display');
        }

        var activate = function()
        {
            $jcontainer.find('.process__information li:eq(' + selectedIndex + ')').find('.process__image').addClass('process__image--active');
            $jcontainer.find('.process__information li:eq(' + selectedIndex + ')').find('.process__text').addClass('process__text--display');
        }

        this.setup = function () {
            init();
            return this;
        };

        return this.setup();
    }
})(jQuery);
