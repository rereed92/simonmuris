/**** COPYRIGHT REBECCA REED ****/

(function ($) {

    $.fn.browserWarning = function (options) {
        if (this.length > 1) {
            this.each(function () { $(this).browserWarning(options) });
            return this;
        }

        var defaults = $.extend(true, {
            headerMessage : 'Did you know that your Internet Browser is out of date?',
            paragraph1 : 'Your browser is out of date, and may not be compatible with our website. A list of the most popular web browsers can be found below.',
            paragraph2: 'Just click on the icons to get to the download page',
            closeMessage: 'By closing this window you acknowledge that your experience on this website may be degraded',
            closeIcon: '<i class="fa fa-times-circle"></i>'
        }, options);

        var init = function ()
        {
            $('body').prepend
                (
                    '<div class="update-browser-window">' +
                        '<div class="update-browser">' +

                            (defaults.headerMessage === '' ? '' : '<h2>' + defaults.headerMessage + '</h2>') +
                            (defaults.paragraph1 === '' ? '' : '<p>' + defaults.paragraph1 + '</p>') +
                            (defaults.paragraph2 === '' ? '' : '<p>'+defaults.paragraph2+'</p>') +

                            '<div class="browser-link-container">' +
                                '<div class="browser-link">' +
                                    '<a href="http://www.google.com/chrome/" target="_blank">' +
                                        '<img src="/design5/images/browser-chrome.png" alt="Google Chrome" />' +
                                        '<h4>Google Chrome</h4>' +
                                    '</a>' +
                                '</div>' +
                                '<div class="browser-link">' +
                                    '<a href="http://www.mozilla.com/firefox/" target="_blank">' +
                                        '<img src="/design5/images/browser-firefox.png" alt="Mozilla Firefox" />' +
                                        '<h4>Mozilla Firefox</h4>' +
                                    '</a>' +
                                '</div>' +
                                '<div class="browser-link">' +
                                    '<a href="http://www.apple.com/safari/download/" target="_blank">' +
                                        '<img src="/design5/images/browser-safari.png" alt="Safari" />' +
                                        '<h4>Safari</h4>' +
                                    '</a>' +
                                '</div>' +
                                '<div class="browser-link">' +
                                    '<a href="http://www.opera.com/download/" target="_blank">' +
                                        '<img src="/design5/images/browser-opera.png" alt="Opera" />' +
                                        '<h4>Opera</h4>' +
                                    '</a>' +
                                '</div>' +
                                '<div class="browser-link">' +
                                    '<a href="http://www.microsoft.com/windows/Internet-explorer/" target="_blank">' +
                                        '<img src="/design5/images/browser-ie.png" alt="Internet Explorer" />' +
                                        '<h4>Internet Explorer</h4>' +
                                    '</a>' +
                                '</div>' +
                            '</div>' +
                            (defaults.closeMessage === '' ? '' : '<p>' + defaults.closeMessage + '</p>') +
                        '</div>' +
                        '<div class="browser-close">'
                           + (defaults.closeIcon === '' ? '<i class="fa fa-times-circle"></i>' : defaults.closeIcon) +
                        '</div>' +
                    '</div>'
                )

            var readCookie = cookies.readCookie('browser-warning');

            if (readCookie == null) {
                $('.update-browser-window').addClass('show');
            }
            

            $('.browser-close').click(function () {
                cookies.createCookie('browser-warning', 'agreed', 1);
                $('.update-browser-window').removeClass('show');
            });
        };


        var cookies =
        {
            readCookie: function (name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            },

            eraseCookie: function (name) {
                cookies.createCookie(name, "", -1);
            },

            createCookie: function (name, value, days) {
                var expires = "";
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toGMTString();
                }
                document.cookie = name + "=" + value + expires + "; path=/";
            }

        };

        
        this.setup = function () {
            init();
            return this;
        };

        return this.setup();
    }
})(jQuery);




















