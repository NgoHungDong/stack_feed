//
// Sticky
//

'use strict';

var Sticky = (function() {

    //
    // Variables
    //

    var $sticky = $('[data-toggle="sticky"]');


    //
    // Methods
    //

    function init($this) {

        var offset = $this.data('sticky-offset') ? $this.data('sticky-offset') : 0;
        var options = {
            'offset_top': offset
        };

        $this.stick_in_parent(options);
    }


    //
    // Events
    //

    if ($sticky.length) {

        // Init selects
        $sticky.each(function() {
            init($(this));
        });
    }

})();