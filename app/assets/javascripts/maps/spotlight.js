//
// Spotlight
//

'use strict';

var Spotlight = (function() {

    // Variables

    var $spotlight = $('.spotlight');


    // Methods

    function init($this) {

        var holderHeight;

        if ($this.data('spotlight') == 'fullscreen') {
            if ($this.data('spotlight-offset')) {
                var offsetHeight = $('body').find($this.data('spotlight-offset')).height();
                holderHeight = $(window).height() - offsetHeight;
            } else {
                holderHeight = $(window).height();
            }

            if ($(window).width() > 991) {
                $this.find('.spotlight-holder').css({
                    'height': holderHeight + 'px'
                });
            } else {
                $this.find('.spotlight-holder').css({
                    'height': 'auto'
                });
            }
        }
    }


    // Events

    $(window).on({
        'load resize': function() {
            if ($spotlight.length) {
                $spotlight.each(function() {
                    init($(this));
                });
            }
        }
    })

})();